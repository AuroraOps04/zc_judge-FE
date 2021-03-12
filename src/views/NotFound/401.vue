<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">OPPS!</h1>
        <h2>你无权来此页面</h2>
        <h6>ERROR, UNAUTHORIZED</h6>
        <ul class="list-unsettled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/">回首页</router-link>
          </li>
          <li class="link-type">
            <a href="https://www.ccps.gov.cn/">随便看看</a>
          </li>
          <li>
            <a @click.prevent="dialogVisible = true" href="#">点我看图</a>
          </li>
        </ul>
        <el-button @click="back" icon="arrow-left" class="pan-back-btn"
          >返回</el-button
        >
      </el-col>

      <el-col :span="12">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        />
      </el-col>
    </el-row>

    <el-dialog title="随便看看" :visible.sync="dialogVisible" size="large">
      <img class="pan-img" :src="require('assets/clip.gif')" alt="clip" />
    </el-dialog>
  </div>
</template>

<script>
import errGif from "assets/401.gif";

export default {
  name: "NotAllow",
  data() {
    return {
      errGif: errGif + "?" + +new Date(),
      dialogVisible: false
    };
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: "/" });
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.errPage-container {
  width: 800px;
  margin: 100px auto;
  .pan-back-btn {
    margin-top: 60px;
    background: #008489;
    color: #fff;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    width: 400px;
    display: block;
    margin: 0 auto;
  }
  .text-jumbo {
    margin-top: 30px;
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unsettled {
    margin-top: 20px;
    font-size: 14px;
    list-style-type: none;
    li {
      list-style: none;
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
