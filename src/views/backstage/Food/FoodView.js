import BackNavBar from "@/components/BackNavBar.vue";

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/backFood",
      filter: {
        name: "",
        rating: "",
      },
      loading: false,
      specialties: [
        {
          id: 1,
          image_url: "https://placekitten.com/40/40",
          name: "温州鱼丸",
          description: "温州特色鱼丸，味道鲜美。",
          features: "软嫩、多汁",
          rating: 4.5,
        },
        {
          id: 2,
          image_url: "https://placekitten.com/40/40",
          name: "温州鸭舌",
          description: "传统工艺制作的温州美食。",
          features: "咸鲜、香辣",
          rating: 4.7,
        },
      ],
    };
  },
  methods: {
    onSearch() {
      console.log("搜索条件：", this.filter);
    },
    onReset() {
      this.filter = { name: "", rating: "" };
    },
    addSpecialty() {
      console.log("新增美食");
    },
    editSpecialty(specialty) {
      console.log("编辑美食", specialty);
    },
    deleteSpecialty(specialty) {
      console.log("删除美食", specialty);
    },
  },
};
