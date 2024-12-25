import { getUserById, updateUser } from "@/api/user"; // 引入 API 方法

export default {
  data() {
    return {
      user: {
        avatarUrl: "",
        name: "",
        username: "",
        birthday: "",
        phone: "",
        email: "",
        hobbies: [],
        profile: "",
      },
      editUser: {}, // 用于存储编辑时的临时数据
      editInfoDialogVisible: false, // 控制个人信息编辑框的显示
      editProfileDialogVisible: false, // 控制个人简介编辑框的显示
      loading: false, // 加载状态
    };
  },
  computed: {
    userInfo() {
      return {
        姓名: this.user.name,
        账号: this.user.username,
        生日: this.user.birthday,
        手机: this.user.phone,
        邮箱: this.user.email,
        爱好: this.user.hobbies.join(", "),
      };
    },
  },
  methods: {
    // 获取用户数据
    async fetchUserData(userId) {
      this.loading = true;
      try {
        const { data } = await getUserById(userId);
        this.user = data; // 将后端数据赋值给 user
      } catch (error) {
        this.$message.error("获取用户数据失败！");
      } finally {
        this.loading = false;
      }
    },
    // 打开编辑框
    openEditDialog(type) {
      if (type === "info") {
        this.editUser = { ...this.user }; // 深拷贝用户信息到编辑对象
        this.editInfoDialogVisible = true;
      } else if (type === "profile") {
        this.editUser = { profile: this.user.profile }; // 仅复制简介
        this.editProfileDialogVisible = true;
      }
    },
    // 保存修改的用户信息
    async saveInfo() {
      try {
        this.loading = true;
        await updateUser(this.user.id, this.editUser); // 调用 API 更新用户信息
        Object.assign(this.user, this.editUser); // 更新本地用户数据
        this.$message.success("信息修改成功！");
      } catch (error) {
        this.$message.error("信息修改失败！");
      } finally {
        this.editInfoDialogVisible = false;
        this.loading = false;
      }
    },
    // 保存修改的用户简介
    async saveProfile() {
      try {
        this.loading = true;
        await updateUser(this.user.id, { profile: this.editUser.profile }); // 调用 API 更新简介
        this.user.profile = this.editUser.profile; // 更新本地用户数据
        this.$message.success("简介修改成功！");
      } catch (error) {
        this.$message.error("简介修改失败！");
      } finally {
        this.editProfileDialogVisible = false;
        this.loading = false;
      }
    },
  },
  mounted() {
    // 假设当前用户的 ID 为 1
    this.fetchUserData(1);
  },
};
