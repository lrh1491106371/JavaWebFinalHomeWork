import BackNavBar from "@/components/BackNavBar.vue";
import { uploadImage } from "@/api/upload";
import {
  fetchUserInfoList,
  addUserInfo,
  updateUserInfo,
  deleteUserInfoById,
} from "@/api/userinfo"; // 使用封装好的 API

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackUser", // 当前路由
      filter: {
        username: "", // 用于搜索的过滤器
      },
      loading: false,
      users: [], // 用于存储用户数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        username: "",
        password: "",
        birthday: "",
        phone: "",
        email: "",
        hobbies: "",
        avatarUrl: "",
        resume: "",
      },
    };
  },
  methods: {
    // 获取用户数据
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await fetchUserInfoList(this.filter);
        this.users = response;
      } catch (error) {
        console.error("获取用户数据失败:", error);
      } finally {
        this.loading = false;
      }
    },
    // 搜索功能
    onSearch() {
      this.fetchUsers();
    },
    // 重置搜索条件
    onReset() {
      this.filter = { username: "" };
      this.fetchUsers();
    },
    // 打开新增用户弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        username: "",
        password: "",
        birthday: "",
        phone: "",
        email: "",
        hobbies: "",
        avatarUrl: "",
        resume: "",
      };
      this.dialogVisible = true; // 打开弹出框
    },
    // 自定义上传方法
    async uploadAvatar(options) {
      const { file } = options;
      try {
        const response = await uploadImage(file);
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
        this.form.avatarUrl = response.data;
        this.$message.success("图片上传成功！");
      } else {
        this.$message.error(response.msg || "上传失败：未返回正确的 code 值！");
      }
    },
    // 打开编辑用户弹窗
    openEditDialog(user) {
      this.isEdit = true;
      this.form = { ...user }; // 设置表单数据
      this.dialogVisible = true;
    },
    // 保存用户信息（新增或编辑）
    async handleSave() {
        try {
          // 确保 imageUrl 是字符串
          if (
            typeof this.form.imageUrl === "object" &&
            this.form.imageUrl.url
          ) {
            this.form.imageUrl = this.form.imageUrl.url; // 提取对象中的 URL 值
          } else if (typeof this.form.imageUrl !== "string") {
            this.form.imageUrl = ""; // 如果不是字符串，也不是对象，设置为空字符串
          }
            
          const saveData = { ...this.form };

          if (this.isEdit) {
            await updateUserInfo(saveData);
            this.$message.success("用户信息更新成功！");
          } else {
            await addUserInfo(saveData);
            this.$message.success("用户信息新增成功！");
          }
          this.dialogVisible = false;
          this.fetchUsers();
        } catch (error) {
        console.error("保存用户信息失败:", error);
        this.$message.error("操作失败，请重试！");
      }
    },
    // 删除用户信息
    async deleteUser(user) {
      try {
        await this.$confirm(`确定删除用户 "${user.username}" 吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        });
        await deleteUserInfoById(user.id);
        this.$message.success("用户信息删除成功！");
        this.fetchUsers();
      } catch (error) {
        if (error !== "cancel") {
          console.error("删除用户信息失败:", error);
          this.$message.error("删除失败，请重试！");
        }
      }
    },
  },
  mounted() {
    this.fetchUsers(); // 页面加载时获取用户数据
  },
};
