<template>
    <el-header height="80px" class="header">
        <div class="header-content">
            <!-- 左侧 Logo -->
            <div class="logo">温州记忆</div>

            <!-- 中间导航菜单 -->
            <el-menu :default-active="activeIndex" mode="horizontal" class="nav-menu" background-color="transparent"
                text-color="#fff" active-text-color="#004080">
                <el-menu-item index="1">
                    <router-link to="/home">网站首页</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/food">温州特产</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/culture">温州文化</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/scenery">温州风景</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link to="/information">用户信息</router-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <router-link to="/feedback">意见反馈</router-link>
                </el-menu-item>
            </el-menu>

            <!-- 右侧登录按钮 -->
            <el-button class="login-btn" type="primary" size="medium" @click="goToLogin">登录/注册</el-button>
        </div>
    </el-header>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1", // 默认激活的菜单项
        };
    },
    created() {
        // 在页面加载时，动态设置当前路由路径对应的菜单项
        this.setActiveIndex();
    },
    watch: {
        // 监听路由变化，更新activeIndex
        $route: "setActiveIndex",
    },
    methods: {
        setActiveIndex() {
            // 获取当前路由路径，动态更新activeIndex
            const path = this.$route.path;
            if (path === "/home") {
                this.activeIndex = "1";
            } else if (path === "/food") {
                this.activeIndex = "2";
            } else if (path === "/culture") {
                this.activeIndex = "3";
            } else if (path === "/scenery") {
                this.activeIndex = "4";
            } else if (path === "/information") {
                this.activeIndex = "5";
            } else if (path === "/feedback") {
                this.activeIndex = "6";
            } else {
                this.activeIndex = "1"; // 默认首页
            }
        },
        goToLogin() {
            this.$router.push("/"); // 导航到登录页
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap");

/* 导航栏样式 */
.header {
    background: linear-gradient(90deg, #91defe, #f9bccc);
    color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    font-size: 32px;
    font-weight: bold;
    font-family: "ZCOOL XiaoWei", serif;
    color: #fff;
    cursor: pointer;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.nav-menu {
    flex: 1;
    margin-left: 40px;
}

.nav-menu .el-menu-item {
    font-size: 16px;
    font-weight: 500;
    padding: 0 20px;
    transition: color 0.3s ease, transform 0.3s ease;
}

.nav-menu .el-menu-item:hover {
    color: #2ecdf3 !important;
    transform: scale(1.1);
}

.login-btn {
    background-color: #31bfe7;
    color: #ffffff;
    font-weight: bold;
    padding: 8px 20px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.login-btn:hover {
    background-color: #ffffff;
    color: #3c8ff2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>