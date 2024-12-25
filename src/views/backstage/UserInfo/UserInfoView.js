import BackNavBar from "@/components/BackNavBar"; // 引入独立的导航栏组件

import { fetchUserList, deleteUser, updateUser } from "@/api/user"; // 引入用户 API 方法

export default {
  name: "UserManagement",
  components: {
    BackNavBar,
  },
  data() {
    return {
      activeIndex: "1",
      filter: {
        username: "",
        phone: "",
        status: "",
      },
      users: [],
      loading: false,
    };
  },
  methods: {
    // 获取用户列表
    async fetchUsers() {
      this.loading = true;
      try {
        const { data } = await fetchUserList(this.filter);
        this.users = data;
      } catch (error) {
        this.$message.error("获取用户列表失败！");
      } finally {
        this.loading = false;
      }
    },
    // 搜索用户
    onSearch() {
      this.fetchUsers();
    },
    // 重置搜索条件
    onReset() {
      this.filter = { username: "", phone: "", status: "" };
      this.fetchUsers();
    },
    // 删除用户
    async deleteUser(user) {
      try {
        await deleteUser(user.id);
        this.$message.success("删除成功！");
        this.fetchUsers();
      } catch (error) {
        this.$message.error("删除失败！");
      }
    },
    // 修改用户信息
    editUser(user) {
      this.$router.push({ name: "EditUser", params: { id: user.id } });
    },
    // 新增用户
    addUser() {
      this.$router.push({ name: "AddUser" });
    },
    // 修改用户状态
    async changeStatus(user) {
      try {
        await updateUser(user.id, { status: user.status });
        this.$message.success("状态更新成功！");
      } catch (error) {
        this.$message.error("状态更新失败！");
      }
    },
  },
  mounted() {
    this.fetchUsers(); // 初始加载用户列表
  },
};
