import { login, register } from "@/api/user"; // 引入用户API模块

export default {
  data() {
    return {
      username: "", // 注册用的用户名
      email: "", // 注册用的邮箱
      password: "", // 注册用的密码
      loginUsername: "", // 登录用的用户名
      loginPassword: "", // 登录用的密码
    };
  },
  methods: {
    // 切换到注册界面
    showSignUp() {
      this.$refs.container.classList.add("right-panel-active");
    },
    // 切换到登录界面
    showSignIn() {
      this.$refs.container.classList.remove("right-panel-active");
    },
    // 注册方法
    async handleRegister() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await register(payload); // 调用注册API
        console.log("注册成功:", response.data);
        alert(response.data.message || "注册成功！");
        this.showSignIn(); // 切换到登录界面
      } catch (error) {
        console.error("注册失败:", error.response?.data?.message || "未知错误");
        alert(error.response?.data?.message || "注册失败，请稍后重试！");
      }
    },
    // 登录方法
    async handleLogin() {
      const payload = {
        username: this.loginUsername,
        password: this.loginPassword,
      };

      try {
        // 如果用户名是 admin 且密码是 123456，则直接跳转
        if (payload.username === "admin" && payload.password === "123456") {
          console.log("管理员登录成功");
          this.$router.push("/panel"); // 跳转到管理员面板
          return;
        }

        // 调用登录API
        const response = await login(payload);
        console.log("登录成功:", response.data);

        const token = response.data.data; // 获取后端返回的 JWT
        localStorage.setItem("token", token); // 保存到本地存储

        this.$router.push("/panel"); // 跳转到面板页面
      } catch (error) {
        console.error("登录失败:", error.response?.data?.message || "未知错误");
        alert(error.response?.data?.message || "登录失败，请稍后重试！");
      }
    },
  },
};
