import { fetchFoodList } from "@/api/food"; // 引入API文件
import ColorfulText from "@/components/ColorfulText.vue";
import ScrollingAnimation from "@/components/ScrollingAnimation.vue";
import FoodCard from "@/components/FoodCard.vue";

export default {
  name: "FoodView",
  components: {
    ColorfulText,
    ScrollingAnimation,
    FoodCard,
  },
  data() {
    return {
      tags: [
        "温州灯盏糕",
        "长人馄饨",
        "矾山肉燕",
        "温州糟羹",
        "海鲜面",
        "温州鸭舌",
        "苍南鱼面",
      ],
      images: [
        { src: require("@/assets/images/HomeView/11.jpg"), alt: "美食1" },
        { src: require("@/assets/images/HomeView/12.jpg"), alt: "美食2" },
        { src: require("@/assets/images/HomeView/14.jpg"), alt: "美食3" },
        { src: require("@/assets/images/HomeView/15.jpg"), alt: "美食4" },
      ],
      foods: [
      ], // 初始化为空数组
    };
  },
  methods: {
    async fetchFoods() {
      try {
        const response = await fetchFoodList(); // 调用 API
        console.log("API 响应数据：", response); // 检查 API 返回值
        this.foods = response; // 赋值给 foods
        console.log("foods 数据已绑定：", this.foods);
      } catch (error) {
        console.error("获取foods数据失败:", error);
      }
    },
  },
  created() {
    this.fetchFoods(); // 调用 fetchFoods 方法来发起 API 请求
  },
};
