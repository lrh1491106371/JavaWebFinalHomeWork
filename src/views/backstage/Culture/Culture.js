import BackNavBar from "@/components/BackNavBar.vue";
import { uploadImage } from "@/api/upload";
import {
  fetchCultureList2,
  addCulture,
  updateCulture,
  deleteCultureById,
  searchCultureByKeyword,
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
      keyword: "", // 确保初始化为空字符串
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
      total: 0, // 数据总数
      page: 1, // 当前页码
      pageSize: 5, // 每页显示条数
    };
  },
  methods: {
    // 获取文化数据
    // async fetchCultures() {
    //   this.loading = true;
    //   try {
    //     const response = await fetchCultureList();
    //     this.cultures = response;
    //   } catch (error) {
    //     console.error("获取文化数据失败:", error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    // 获取文化数据（分页）
    async fetchCultures(page = 1, pageSize = 5) {
      this.loading = true;
      try {
        const response = await fetchCultureList2(page, pageSize);
        this.cultures = response.rows; // 数据列表
        this.total = response.total; // 总条数
      } catch (error) {
        console.error("获取文化数据失败:", error);
      } finally {
        this.loading = false;
      }
    },

    // 页码变化
    handlePageChange(newPage) {
      this.page = newPage;
      this.fetchCultures(this.page, this.pageSize); // 重新获取数据
    },
    // 每页条数变化
    handlePageSizeChange(newPageSize) {
      this.pageSize = newPageSize;
      this.page = 1; // 重置到第一页
      this.fetchCultures(this.page, this.pageSize); // 重新获取数据
    },

    // 搜索功能
    async onSearch() {
      // 检查是否有关键词
      if (this.keyword.trim()) {
        try {
          // 调用模糊搜索 API 获取搜索结果
          const response = await searchCultureByKeyword(this.keyword);
          this.cultures = response; // 将结果存储到 `cultures`
        } catch (error) {
          console.error("Error searching cultures:", error);
        }
      } else {
        // 如果没有关键词，可以选择返回所有数据，或者清空结果
        this.cultures = [];
      }
    },
    // 重置搜索条件
    onReset() {
      this.keyword = ""; // 清空搜索条件
      this.fetchCultures();
      this.page=1;
    },
    // 打开新增文化弹窗
    openAddDialog() {
      console.log("新增文化按钮点击！");
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        image_url: "",
        origin_period: "",
        description: "",
      };
      this.dialogVisible = true; // 打开弹出框
      console.log("dialogVisible:", this.dialogVisible); // 调试
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

    // 打开编辑文化弹窗
    openEditDialog(culture) {
      this.isEdit = true;
      this.form = { ...culture };
      this.dialogVisible = true;
    },
    // 保存文化信息（新增或编辑）
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
          await updateCulture(saveData);
          this.$message.success("文化信息更新成功！");
        } else {
          await addCulture(saveData);
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
    // this.fetchCultures(); // 页面加载时获取文化数据
    this.fetchCultures(this.currentPage, this.pageSize); // 页面加载时获取文化数据（分页）
    console.log(this.total, this.page, this.pageSize);
  },
};
