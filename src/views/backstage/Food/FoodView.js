import BackNavBar from "@/components/BackNavBar.vue";
import { fetchFoodList, addFood, updateFood, deleteFoodById } from "@/api/food"; // 使用封装好的 API

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackFood",
      filter: {
        name: "",
        origin_region: "",
      },
      loading: false,
      foods: [], // 用于存储食品数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        image_url: "",
        origin_region: "",
        description: "",
      },
    };
  },
  methods: {
    // 获取食品数据
    async fetchFoods() {
      this.loading = true;
      try {
        const response = await fetchFoodList();
        this.foods = response;
      } catch (error) {
        console.error("获取食品数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    // 搜索功能
    onSearch() {
      this.fetchFoods();
    },
    // 重置搜索条件
    onReset() {
      this.filter = { name: "", origin_region: "" };
      this.fetchFoods();
    },
    // 打开新增食品弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        image_url: "",
        origin_region: "",
        description: "",
      };
      this.dialogVisible = true;
    },
    // 打开编辑食品弹窗
    openEditDialog(food) {
      this.isEdit = true;
      this.form = { ...food };
      this.dialogVisible = true;
    },
    // 保存食品信息（新增或编辑）
    async handleSave() {
      try {
        if (this.isEdit) {
          await updateFood(this.form);
          this.$message.success("食品信息更新成功！");
        } else {
          await addFood(this.form);
          this.$message.success("食品信息新增成功！");
        }
        this.dialogVisible = false;
        this.fetchFoods();
      } catch (error) {
        console.error("保存食品信息失败:", error);
        this.$message.error("操作失败，请重试！");
      }
    },
    // 删除食品信息
    async deleteFood(food) {
      try {
        await this.$confirm(`确定删除食品 "${food.name}" 吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        await deleteFoodById(food.id);
        this.$message.success("食品信息删除成功！");
        this.fetchFoods();
      } catch (error) {
        if (error !== "cancel") {
          console.error("删除食品信息失败:", error);
          this.$message.error("删除失败，请重试！");
        }
      }
    },
  },
  mounted() {
    this.fetchFoods(); // 页面加载时获取食品数据
  },
};
