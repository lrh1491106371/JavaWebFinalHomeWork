import BackNavBar from "@/components/BackNavBar"; // 引入公共组件
import {
  fetchUserInfoList,
  addUserInfo,
  updateUserInfo,
  deleteUserInfoById,
} from "@/api/userinfo"; // 使用封装好的用户 API

export default {
  components: { BackNavBar },
  data() {
    return {
      activeIndex: "/BackUsers",
      filter: {
        username: "",
        email: "",
      },
      loading: false,
      users: [], // 用于存储用户数据
      dialogVisible: false,
      isEdit: false,
      form: {
        id: null,
        username: "",
        email: "",
        phone: "",
        birthday: "",
        avatar_url: "",
        hobbies: "",
        resume: "",
      },
    };
  },
  methods: {
    // 获取用户数据
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await fetchUserInfoList();
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
      this.filter = { username: "", email: "" };
      this.fetchUsers();
    },
    // 打开新增用户弹窗
    openAddDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        username: "",
        email: "",
        phone: "",
        birthday: "",
        avatar_url: "",
        hobbies: "",
        resume: "",
      };
      this.dialogVisible = true;
    },
    // 打开编辑用户弹窗
    openEditDialog(user) {
      this.isEdit = true;
      this.form = { ...user };
      this.dialogVisible = true;
    },
    // 保存用户信息（新增或编辑）
    async handleSave() {
      try {
        if (this.isEdit) {
          await updateUserInfo(this.form);
          this.$message.success("用户信息更新成功！");
        } else {
          await addUserInfo(this.form);
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
