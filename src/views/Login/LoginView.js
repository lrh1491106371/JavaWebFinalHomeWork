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
        const response = await loginUser({
          username: this.username,
          password: this.password,
        });
        // alert("登录成功，Token：" + response.token);
        localStorage.setItem("token", response.token);
        this.$router.push("/home");

        // 假设登录成功后，返回的数据中包含用户ID
        const id = response.id;

        // 登录成功后，获取用户信息
        this.getUserInfo(id);
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
