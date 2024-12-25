import BackNavBar from "@/components/BackNavBar.vue"; // 引入封装好的导航栏组件

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackScenery", // 当前激活的导航栏菜单项
      filter: {
        name: "",
        best_season: "",
      },
      loading: false,
      sceneryList: [
        {
          id: 1,
          name: "江心屿",
          description: "中国十大最美小岛之一，风景如画。",
          location: "温州市鹿城区",
          best_season: "春秋",
          image_url: "https://example.com/images/jiangxinyu.jpg",
        },
        {
          id: 2,
          name: "雁荡山",
          description: "以奇峰怪石著称，世界地质公园。",
          location: "温州市乐清市",
          best_season: "全年",
          image_url: "https://example.com/images/yandangshan.jpg",
        },
      ],
    };
  },
  methods: {
    onSearch() {
      console.log("搜索条件：", this.filter);
      // 实际场景下应通过 API 请求过滤数据
    },
    onReset() {
      this.filter = { name: "", best_season: "" };
    },
    addScenery() {
      console.log("新增风景");
      // 弹窗或跳转页面新增风景
    },
    editScenery(scenery) {
      console.log("编辑风景", scenery);
      // 弹窗或跳转页面编辑风景
    },
    deleteScenery(scenery) {
      console.log("删除风景", scenery);
      // 确认框后执行删除操作
    },
  },
};
