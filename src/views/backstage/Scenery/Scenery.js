import BackNavBar from "@/components/BackNavBar.vue";
import { uploadImage } from "@/api/upload";
import {
  fetchSceneryList,
  addScenery,
  updateScenery,
  deleteSceneryById,
} from "@/api/scenery";

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackScenery",
      filter: {
        name: "",
      },
      loading: false,
      sceneries: [], // 用于存储风景数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        imageUrl: "",
        location: "",
        bestSeason: "",
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
      this.filter = { name: "" };
      this.fetchSceneries();
    },
    // 打开新增风景弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        imageUrl: "",
        location: "",
        bestSeason: "",
        description: "",
      };
      this.dialogVisible = true;
    },
    // 自定义上传方法
    async uploadAvatar(options) {
      const { file } = options;

      try {
        const response = await uploadImage(file); // 调用封装的 upload API
        options.onSuccess(response.data, file); // 通知上传成功
      } catch (error) {
        console.error("图片上传失败:", error);
        this.$message.error("图片上传失败");
        options.onError(error); // 通知上传失败
      }
    },

    // 成功回调，处理后端返回的值
    handleAvatarSuccess(response) {
      if (!response) {
        return;
      }
      // 安全地读取返回值
      if (response.code === 1 && response.data) {
        this.form.imageUrl = response.data; // 赋值图片 URL
        this.$message.success("图片上传成功！");
      } else {
        this.$message.error(response.msg || "上传失败：未返回正确的 code 值！");
      }
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
        // 确保 imageUrl 是字符串
        if (typeof this.form.imageUrl === "object" && this.form.imageUrl.url) {
          this.form.imageUrl = this.form.imageUrl.url; // 提取对象中的 URL 值
        } else if (typeof this.form.imageUrl !== "string") {
          this.form.imageUrl = ""; // 如果不是字符串，也不是对象，设置为空字符串
        }

        // 确保字段名称与后端一致
        const saveData = {
          ...this.form,
          image_url: this.form.imageUrl, // 或者改为后端接受的字段名称
        };

        if (this.isEdit) {
          await updateScenery(saveData);
          this.$message.success("风景信息更新成功！");
        } else {
          await addScenery(saveData);
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
