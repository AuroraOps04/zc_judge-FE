<template>
  <div class="header">
    <h1 class="title" @click="$router.push({ name: 'Home' })">
      至诚在线评测
    </h1>
    <ul class="user">
      <template v-if="!isLogin">
        <li @click="goLoginAndRegister('login')">
          登录
        </li>
        <li @click="goLoginAndRegister('register')">
          注册
        </li>
      </template>
      <template v-else>
        <li class="user-menu-container">
          <img
            :src="require('assets/avatar.jpg')"
            alt="头像"
            @click="showUserMenu = !showUserMenu"
          />
          <div class="user-menu" v-if="showUserMenu">
            <div class="user-menu-header">
              <div class="user-menu-header-top">
                <h4>{{ user.username ? user.username : "livecode" }}</h4>
              </div>
              <div class="user-menu-header-bottom">
                没有了目的, 生活便郁闷无光
              </div>
            </div>
            <div class="user-menu-content">
              <ul>
                <li>笔记本</li>
                <li>做题分析</li>
                <li @click="logout">
                  退出
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      showUserMenu: false
    };
  },
  methods: {
    ...mapActions("user", ["changeProfile"]),
    logout() {
      this.changeProfile({});
      this.$message.success("logout successful, please sing in again");
      this.$router.push({ name: "LoginAndRegister" });
    },
    goLoginAndRegister(action) {
      this.$router.push({
        name: "LoginAndRegister",
        params: {
          action
        }
      });
    }
  },
  computed: {
    ...mapGetters(["token"]),
    isLogin() {
      return !!this.token;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/base";
.header {
  width: @main-width;
  height: 44px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  .title {
    float: left;
    height: 20px;
    font-size: 20px;
    color: #333333;
    font-weight: 700;
    font-family: Poppins, "方正兰亭", serif;
  }
  .user {
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      cursor: pointer;
      &.user-menu-container {
        position: relative;
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .user-menu {
          position: absolute;
          right: 0;
          width: 280px;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          .user-menu-header {
            height: 80px;
            padding: 10px 15px;
            background-color: #eee;
            .user-menu-header-top {
              margin-bottom: 15px;
            }
          }
          .user-menu-content {
            li {
              padding-left: 15px;
              margin-bottom: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
