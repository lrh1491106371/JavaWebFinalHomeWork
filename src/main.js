import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // 确保路径正确

// 引入 element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store); // 挂载 Vuex
app.mount("#app");
