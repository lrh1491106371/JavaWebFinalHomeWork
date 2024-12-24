<template>
    <div>
        <el-container>
            <!-- 使用封装好的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>首页管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="addUser">新增用户</el-button>
                </el-header>
                正在开发中

            </el-container>
        </el-container>
    </div>
</template>

<script>
import BackNavBar from "@/components/BackNavBar.vue"; // 引入封装好的导航栏组件

export default {
    components: { BackNavBar },
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