import ColorfulText from "@/components/ColorfulText.vue";
import StrategyItem from "@/components/StrategyItem.vue";
import { fetchSceneryList } from "@/api/scenery"; // 引入动态攻略 API

export default {
  name: "SceneryView",
  components: {
    ColorfulText,
    StrategyItem,
  },
  data() {
    return {
      // 固定的景点数据
      destinations: [
        { name: "雁荡山方洞", image: require("@/assets/images/Culture/1.jpg") },
        {
          name: "大罗山百家尖",
          image: require("@/assets/images/Culture/2.jpg"),
        },
        { name: "楠溪江", image: require("@/assets/images/Culture/3.jpg") },
        { name: "瑞安桐溪", image: require("@/assets/images/Culture/4.jpg") },
        {
          name: "洞头连港海岸带",
          image: require("@/assets/images/Culture/5.jpg"),
        },
        { name: "五马街", image: require("@/assets/images/Culture/6.jpg") },
      ],
      // 动态的攻略数据
      strategies: [],
    };
  },
  computed: {
    // 每 4 个攻略数据分成一组
    chunkedStrategies() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.strategies.length; i += chunkSize) {
        chunks.push(this.strategies.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    this.fetchStrategies(); // 加载攻略数据
  },
  methods: {
    // 获取动态攻略数据
    async fetchStrategies() {
      try {
        const response = await fetchSceneryList();
        console.log("API 响应数据：", response); // 检查 API 返回值
        this.strategies = response; // 赋值给 foods
        console.log("foods 数据已绑定：", this.strategies);
      } catch (error) {
        console.error("获取攻略数据失败：", error);
      }
    },
  },
};
