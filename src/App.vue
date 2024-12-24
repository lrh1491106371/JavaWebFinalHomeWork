<template>
  <div id="app" class="app-container">
    <!-- 根据路由动态显示导航栏 -->
    <NavBar v-if="showNavBar" />
    <BackNavBar v-if="showBackNavBar" />

    <!-- 路由内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import BackNavBar from './components/BackNavBar.vue';

export default {
  components: {
    NavBar,
    BackNavBar,
  },
  computed: {
    // 动态判断是否显示 NavBar
    showNavBar() {
      // 当路径为 /home、/culture、/food 等时，显示 NavBar
      const routes = ['/home', '/culture', '/food', '/scenery', '/information', '/feedback'];
      return routes.includes(this.$route.path);
    },
    // 动态判断是否显示 BackNavBar
    showBackNavBar() {
      // 当路径为 /panel、/backHome 等时，显示 BackNavBar
      const backRoutes = [
        // '/panel',
        // '/backHome',
        // '/backCulture',
        // '/backFood',
        // '/backScenery',
        // '/backFeedback',
        // '/backUserInfo',
      ];
      return backRoutes.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
/* 全局背景样式 */
.app-container {
  background: linear-gradient(to bottom, #f3e7e9, #e3eeff);
  /* 柔和渐变色 */
  min-height: 100vh;
  padding: 2rem;
  color: #333;
  position: relative;
  overflow: hidden;
  /* 防止背景溢出 */
}

.app-container::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 300px;
  height: 300px;
  background: rgba(255, 183, 197, 0.4);
  filter: blur(100px);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes float {
  to {
    transform: translateY(20px) translateX(20px);
  }
}
</style>