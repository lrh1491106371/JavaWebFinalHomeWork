import { registerUser, loginUser, fetchUserInfoById } from "@/api/user";

export default {
  name: "LoginView",
  data() {
    return {
      // 注册表单数据
      username: "",
      email: "",
      password: "",
      // 登录表单数据
      loginEmail: "",
      loginPassword: "",
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
    // 处理注册
    async handleRegister() {
      try {
        const response = await registerUser({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        alert("注册成功：" + response.message);
      } catch (error) {
        alert("注册失败：" + (error.data?.message || "请重试"));
      }
    },
    // 处理登录
    async handleLogin() {
      try {
        // 判断是否是 admin 用户
        if (this.username === "admin" && this.password === "123456") {
          // 跳转到 /panel
          this.$router.push("/panel");
          return; // 阻止后续代码执行
        }
        const response = await loginUser({
          username: this.username,
          password: this.password,
        });
        // 假设后端返回的数据包含 token 和用户信息
        const token = response.token; // 获取 token
        const userInfo = response.userInfo; // 获取用户信息

        // 将 token 和用户信息存储到 localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 存储用户信息

        // 跳转到主页
        this.$router.push("/home");

      } catch (error) {
        alert("登录失败：" + (error.data?.message || "请重试"));
      }
    },

    async getUserInfo(id) {
      try {
        const response = await fetchUserInfoById(id);
        this.userInfo = response; // 假设API返回的用户信息存在data字段中
      } catch (error) {
        console.error("获取用户信息失败", error);
      }
    },
  },
};
