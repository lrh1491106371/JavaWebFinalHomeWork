<template>
    <div>
        <el-container>
            <!-- Sidebar -->
            <el-aside width="220px" style="background: #f5f7fa; box-shadow: inset -1px 0 0 #ebeef5;">
                <el-menu :default-active="activeIndex" router>
                    <el-menu-item index="/panel">
                        <i class="el-icon-info"></i>
                        <span>仪表盘</span>
                    </el-menu-item>
                    <el-menu-item index="/backHome">
                        <i class="el-icon-info"></i>
                        <span>首页管理</span>
                    </el-menu-item>
                    <el-menu-item index="/backCulture">
                        <i class="el-icon-info"></i>
                        <span>文化管理</span>
                    </el-menu-item>
                    <el-menu-item index="/backFood">
                        <i class="el-icon-info"></i>
                        <span>美食管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackScenery">
                        <i class="el-icon-info"></i>
                        <span>风景管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackUserInfo">
                        <i class="el-icon-info"></i>
                        <span>用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackFeedback">
                        <i class="el-icon-info"></i>
                        <span>反馈管理</span>
                    </el-menu-item>
                </el-menu>

            </el-aside>

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>仪表盘</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="addUser">新增用户</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="用户名">
                            <el-input v-model="filter.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input v-model="filter.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-select v-model="filter.status" placeholder="请选择状态">
                                <el-option label="启用" value="active"></el-option>
                                <el-option label="禁用" value="inactive"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="users" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="用户编号" width="100"></el-table-column>
                        <el-table-column prop="avatar" label="用户头像" width="120">
                            <template #default="scope">
                                <img :src="scope.row.avatar" alt="头像"
                                    style="width: 40px; height: 40px; border-radius: 50%;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="username" label="用户名"></el-table-column>
                        <el-table-column prop="gender" label="性别" width="80">
                            <template #default="scope">
                                <el-tag :type="scope.row.gender === '男' ? 'primary' : 'success'">{{ scope.row.gender
                                    }}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="department" label="部门"></el-table-column>
                        <el-table-column prop="phone" label="手机号"></el-table-column>
                        <el-table-column prop="status" label="状态" width="120">
                            <template #default="scope">
                                <el-switch v-model="scope.row.status" active-text="启用" inactive-text="禁用"></el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="editUser(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteUser(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/system/user",
      filter: {
        username: "",
        phone: "",
        status: "",
      },
      loading: false,
      users: [
        {
          id: 1,
          avatar: "https://placekitten.com/40/40",
          username: "admin",
          gender: "男",
          department: "研发部门",
          phone: "158****6789",
          status: true,
        },
        {
          id: 2,
          avatar: "https://placekitten.com/40/40",
          username: "common",
          gender: "女",
          department: "测试部门",
          phone: "182****2345",
          status: true,
        },
      ],
    };
  },
  methods: {
    onSearch() {
      console.log("搜索条件：", this.filter);
    },
    onReset() {
      this.filter = { username: "", phone: "", status: "" };
    },
    addUser() {
      console.log("新增用户");
    },
    editUser(user) {
      console.log("编辑用户", user);
    },
    deleteUser(user) {
      console.log("删除用户", user);
    },
  },
};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #ebeef5;
}

.el-main {
  padding: 20px;
}
</style>