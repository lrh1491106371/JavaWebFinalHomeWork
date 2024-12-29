import { mapActions, mapGetters } from "vuex";
import { fetchUserInfoById } from "@/api/userinfo";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {}, // 从 localStorage 获取用户信息
      loading: false, // 加载状态
    };
  },
  computed: {
    // 从 Vuex 获取用户信息
    ...mapGetters(["userInfo"]),

    // 将用户信息映射到页面显示格式
    user() {
      return this.userInfo || {}; // 确保 userInfo 不为 null
    },
    userInfoFormatted() {
      return {
        姓名: this.user.name || "未填写",
        账号: this.user.username || "未填写",
        生日: this.user.birthday || "未填写",
        手机: this.user.phone || "未填写",
        邮箱: this.user.email || "未填写",
        爱好: this.user.hobbies || "未填写",
      };
    },

    userProfile() {
      return this.user.resume || "暂无简介"; // 如果没有简介，显示默认值
    },
  },
  methods: {
    // Vuex 方法：保存用户数据到 Vuex
    ...mapActions(["setUserInfo", "clearUserInfo"]),

    // 从后端获取用户信息并保存到 Vuex
    async loadUserInfo() {
      this.loading = true;
      try {
        const id = this.$route.params.id || localStorage.getItem("userId");
        const response = await fetchUserInfoById(id); // 调用 API
        console.log("后端返回的数据:", response); // 打印返回数据
        this.setUserInfo(response); // 将数据保存到 Vuex
      } catch (error) {
        console.error("获取用户信息失败:", error);
        this.$message.error("无法加载用户信息，请重试！");
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    // 如果 Vuex 没有用户信息，则从后端加载
    if (!this.userInfo) {
      await this.loadUserInfo();
    }
  },
};
