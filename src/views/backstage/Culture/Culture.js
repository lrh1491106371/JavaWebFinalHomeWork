import BackNavBar from "@/components/BackNavBar.vue";
import axios from "axios";

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackCulture",
      filter: {
        name: "",
        origin_period: "",
      },
      loading: false,
      cultures: [], // 用于存储文化数据
    };
  },
  methods: {
    async fetchCultures() {
      this.loading = true;
      try {
        const response = await axios.get("/api/culture", {
          params: this.filter,
        });
        this.cultures = response.data;
      } catch (error) {
        console.error("获取文化数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    onSearch() {
      this.fetchCultures();
    },
    onReset() {
      this.filter = { name: "", origin_period: "" };
      this.fetchCultures();
    },
    addCulture() {
      console.log("新增文化");
      // 打开新增文化的弹窗或跳转到新增页面
    },
    editCulture(culture) {
      console.log("编辑文化", culture);
      // 打开编辑文化的弹窗或跳转到编辑页面
    },
    deleteCulture(culture) {
      console.log("删除文化", culture);
      // 确认删除并调用后端 API
    },
  },
  mounted() {
    this.fetchCultures(); // 页面加载时获取文化数据
  },
};
