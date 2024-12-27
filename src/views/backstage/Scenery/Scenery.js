import BackNavBar from "@/components/BackNavBar.vue";
import {
  fetchSceneryList,
  addScenery,
  updateScenery,
  deleteSceneryById,
} from "@/api/scenery"; // 使用封装好的 API

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackScenery",
      filter: {
        name: "",
        location: "",
      },
      loading: false,
      sceneries: [], // 用于存储风景数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        image_url: "",
        location: "",
        description: "",
      },
    };
  },
  methods: {
    // 获取风景数据
    async fetchSceneries() {
      this.loading = true;
      try {
        const response = await fetchSceneryList();
        this.sceneries = response;
      } catch (error) {
        console.error("获取风景数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    // 搜索功能
    onSearch() {
      this.fetchSceneries();
    },
    // 重置搜索条件
    onReset() {
      this.filter = { name: "", location: "" };
      this.fetchSceneries();
    },
    // 打开新增风景弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        image_url: "",
        location: "",
        description: "",
      };
      this.dialogVisible = true;
    },
    // 打开编辑风景弹窗
    openEditDialog(scenery) {
      this.isEdit = true;
      this.form = { ...scenery };
      this.dialogVisible = true;
    },
    // 保存风景信息（新增或编辑）
    async handleSave() {
      try {
        if (this.isEdit) {
          await updateScenery(this.form);
          this.$message.success("风景信息更新成功！");
        } else {
          await addScenery(this.form);
          this.$message.success("风景信息新增成功！");
        }
        this.dialogVisible = false;
        this.fetchSceneries();
      } catch (error) {
        console.error("保存风景信息失败:", error);
        this.$message.error("操作失败，请重试！");
      }
    },
    // 删除风景信息
    async deleteScenery(scenery) {
      try {
        await this.$confirm(`确定删除风景 "${scenery.name}" 吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        await deleteSceneryById(scenery.id);
        this.$message.success("风景信息删除成功！");
        this.fetchSceneries();
      } catch (error) {
        if (error !== "cancel") {
          console.error("删除风景信息失败:", error);
          this.$message.error("删除失败，请重试！");
        }
      }
    },
  },
  mounted() {
    this.fetchSceneries(); // 页面加载时获取风景数据
  },
};
