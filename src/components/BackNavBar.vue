<template>
    <el-aside width="220px" style="background: #f5f7fa; box-shadow: inset -1px 0 0 #ebeef5; height: 100vh;">
        <el-menu v-model="localActiveIndex" @select="handleMenuSelect" :default-active="localActiveIndex"
            style="height: 100%; overflow-y: auto;">
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
</template>

<script>
export default {
    name: "BackNavBar",
    props: {
        activeIndex: {
            type: String,
            default: "/panel", // 默认选中的菜单项
        },
    },
    data() {
        return {
            localActiveIndex: this.$route.path || this.activeIndex, // 初始化为当前路由路径
        };
    },
    methods: {
        handleMenuSelect(index) {
            console.log("导航到:", index);
            this.localActiveIndex = index; // 修改本地状态
            this.$router.push(index); // 使用 Vue Router 跳转
            this.$emit("update:activeIndex", index); // 通知父组件状态更新
        },
    },
    watch: {
        $route(to) {
            this.localActiveIndex = to.path; // 路由变化时更新选中状态
        },
    },
};
</script>

<style scoped>
.el-menu-item.is-active {
    background-color: #1890ff !important;
    /* 高亮背景色 */
    color: #fff !important;
    /* 高亮文字色 */
}

.el-menu {
    font-size: 14px;
    /* 确保字体大小不变化 */
}
</style>