<template>
  <div>
    <el-container>
      <el-header> </el-header>
      <el-main>
        <el-form
          ref="registerForm"
          :model="form"
          :rules="rules"
          label-width="80px"
          class="register-box"
        >
          <h3 class="register-title">注册新账号</h3>

          <el-form-item label="账户" prop="username" class="account">
            <tr>
              <td>
                <el-input
                  type="text"
                  placeholder="仅支持中国大陆手机号"
                  v-model="form.username"
                />
              </td>
              <td><el-button type="primary">获取</el-button></td>
            </tr>
          </el-form-item>

          <el-form-item label="验证码" prop="code">
            <el-input
              type="text"
              placeholder="请输入验证码"
              v-model="form.code"
            />
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              placeholder="输入密码"
              v-model="form.password"
            />
          </el-form-item>

          <el-form-item label="二次密码" prop="confirmPassword">
            <el-input
              type="password"
              placeholder="再输入一次密码"
              v-model="form.confirmPassword"
            />
          </el-form-item>

          <el-form-item>
            <el-row class="commit-button">
              <el-button type="primary" @click="onSubmit('registerForm')"
                >立即注册</el-button
              >
              <el-button>取消</el-button>
            </el-row>
          </el-form-item>
        </el-form>

        <el-dialog> </el-dialog>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        code: "",
        password: "",
        confirmPassword: ""
      },
      //注册表单验证
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        code: [{ required: true, message: "验证码不可为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "二次密码不可为空", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    onSubmit(formName) {
      //表单验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/main");
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.register-box {
  border: 1px solid #dcdfe6;
  width: 400px;
  margin: 120px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.register-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.account {
  width: 350px;
}
.commit-button {
  text-align: center;
  margin: 10px auto;
}
</style>
