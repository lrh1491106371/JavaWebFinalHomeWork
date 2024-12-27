import ColorfulText from "@/components/ColorfulText.vue"; // 引入组件
import HistoryItem from "@/components/CultureItem.vue"; // 引入HistoryItem组件
import { fetchCultureList } from "@/api/culture"; // 引入API

export default {
  name: "CultureView",
  components: {
    ColorfulText,
    HistoryItem,
  },
  data() {
    return {
      // 轮播图图片
      carouselImages: [
        require("@/assets/images/Culture/13.jpg"),
        require("@/assets/images/Culture/12.jpg"),
        require("@/assets/images/Culture/11.jpg"),
        require("@/assets/images/Culture/10.jpg"),
        require("@/assets/images/Culture/9.jpg"),
        require("@/assets/images/Culture/7.jpg"),
      ],
      sections: [], // 从后端动态获取的文化内容
    };
  },
  async created() {
    // 在组件创建时调用后端API加载数据
    await this.loadCultureData();
  },
  methods: {
    async loadCultureData() {
      try {
        const response = await fetchCultureList(); // 调用API获取文化列表
        console.log("API 响应数据：", response); // 检查 API 返回值
        this.sections = response; // 赋值给 sections
        console.log("sections 数据已绑定：", this.sections);
      } catch (error) {
        console.error("加载文化数据失败：", error);
      }
    },
  },
};
