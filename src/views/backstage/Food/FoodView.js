import BackNavBar from "@/components/BackNavBar.vue";
import { uploadImage } from "@/api/upload";
import {
  fetchFoodList,
  addFood,
  updateFood,
  deleteFood,
  searchFoodByKeyword,
} from "@/api/food"; // 使用封装好的 API

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackFood",
      filter: {
        name: "",
      },
      loading: false,
      keyword: "", // 确保初始化为空字符串
      foods: [], // 用于存储美食数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        image_url: "",
        rating: null,
        description: "",
      },
    };
  },
  methods: {
    // 获取美食数据
    async fetchFoods() {
      this.loading = true;
      try {
        const response = await fetchFoodList();
        this.foods = response; // 根据返回数据结构调整
      } catch (error) {
        console.error("获取美食数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    // 搜索功能
    async onSearch() {
          // 检查是否有关键词
          if (this.keyword.trim()) {
            try {
              // 调用模糊搜索 API 获取搜索结果
              const response = await searchFoodByKeyword(this.keyword);
              this.foods = response; // 将结果存储到 `foods`
            } catch (error) {
              console.error("Error searching foods:", error);
            }
          } else {
            // 如果没有关键词，可以选择返回所有数据，或者清空结果
            this.foods = [];
          }
        },
    // 重置搜索条件
    onReset() {
      this.keyword = ""; // 清空搜索条件
      this.fetchFoods();
    },
    // 打开新增美食弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        image_url: "",
        rating: null,
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
      if (response.code === 1 && response.data) {
        this.form.imageUrl = response.data; // 赋值图片 URL
        this.$message.success("图片上传成功！");
      } else {
        this.$message.error(response.msg || "上传失败：未返回正确的 code 值！");
      }
    },

    // 打开编辑美食弹窗
    openEditDialog(food) {
      this.isEdit = true;
      this.form = { ...food };
      this.dialogVisible = true;
    },

    // 保存美食信息（新增或编辑）
    async handleSave() {
      try {
        if (typeof this.form.imageUrl === "object" && this.form.imageUrl.url) {
          this.form.imageUrl = this.form.imageUrl.url;
        } else if (typeof this.form.imageUrl !== "string") {
          this.form.imageUrl = "";
        }

        const saveData = {
          ...this.form,
          image_url: this.form.imageUrl,
        };

        if (this.isEdit) {
          await updateFood(saveData);
          this.$message.success("美食信息更新成功！");
        } else {
          await addFood(saveData);
          this.$message.success("美食信息新增成功！");
        }
        this.dialogVisible = false;
        this.fetchFoods();
      } catch (error) {
        console.error("保存美食信息失败:", error);
        this.$message.error("操作失败，请重试！");
      }
    },

    // 删除美食信息
    async deleteFood(food) {
      try {
        await this.$confirm(`确定删除美食 "${food.name}" 吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        await deleteFood(food.id);
        this.$message.success("美食信息删除成功！");
        this.fetchFoods();
      } catch (error) {
        if (error !== "cancel") {
          console.error("删除美食信息失败:", error);
          this.$message.error("删除失败，请重试！");
        }
      }
    },
  },
  mounted() {
    this.fetchFoods(); // 页面加载时获取美食数据
  },
};
