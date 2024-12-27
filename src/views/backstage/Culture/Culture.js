import BackNavBar from "@/components/BackNavBar.vue";
import {
  fetchCultureList,
  // fetchCultureById,
  addCulture,
  updateCulture,
  deleteCultureById,
} from "@/api/culture"; // 使用封装好的 API

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
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        image_url: "",
        origin_period: "",
        description: "",
      },
    };
  },
  methods: {
    // 获取文化数据
    async fetchCultures() {
      this.loading = true;
      try {
        const response = await fetchCultureList();
        this.cultures = response;
      } catch (error) {
        console.error("获取文化数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    // 搜索功能
    onSearch() {
      this.fetchCultures();
    },
    // 重置搜索条件
    onReset() {
      this.filter = { name: "", origin_period: "" };
      this.fetchCultures();
    },
    // 打开新增文化弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        image_url: "",
        origin_period: "",
        description: "",
      };
      this.dialogVisible = true;
    },
    // 打开编辑文化弹窗
    openEditDialog(culture) {
      this.isEdit = true;
      this.form = { ...culture };
      this.dialogVisible = true;
    },
    // 保存文化信息（新增或编辑）
    async handleSave() {
      try {
        if (this.isEdit) {
          await updateCulture(this.form);
          this.$message.success("文化信息更新成功！");
        } else {
          await addCulture(this.form);
          this.$message.success("文化信息新增成功！");
        }
        this.dialogVisible = false;
        this.fetchCultures();
      } catch (error) {
        console.error("保存文化信息失败:", error);
        this.$message.error("操作失败，请重试！");
      }
    },
    // 删除文化信息
    async deleteCulture(culture) {
      try {
        await this.$confirm(`确定删除文化 "${culture.name}" 吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        await deleteCultureById(culture.id);
        this.$message.success("文化信息删除成功！");
        this.fetchCultures();
      } catch (error) {
        if (error !== "cancel") {
          console.error("删除文化信息失败:", error);
          this.$message.error("删除失败，请重试！");
        }
      }
    },
  },
  mounted() {
    this.fetchCultures(); // 页面加载时获取文化数据
  },
};
