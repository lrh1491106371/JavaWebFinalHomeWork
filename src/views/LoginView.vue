<template>
    <div class="wrapper">
        <div class="dower" id="dower" ref="container">
            <!-- 注册表单 -->
            <div class="form-container sign-up-container">
                <form action="../index.html">
                    <h1>注册</h1>
                    <div class="social-container">
                        <a href="#"><img src="../assets/images/30.png" width="40" height="40" /></a>
                        <a href="#"><img src="../assets/images/31.png" width="40" height="40" /></a>
                        <a href="#"><img src="../assets/images/32.png" width="40" height="40" /></a>
                    </div>
                    <span>或使用邮箱注册</span>
                    <input type="text" v-model="username" placeholder="账号名" />
                    <input type="email" v-model="email" placeholder="电子邮箱" />
                    <input type="text" v-model="account" placeholder="账号" />
                    <input type="password" v-model="password" placeholder="密码" />
                    <button type="button" @click="register">注册</button>
                </form>
            </div>

            <!-- 登录表单 -->
            <div class="form-container sign-in-container">
                <form action="../index.html">
                    <h1>登录</h1>
                    <div class="social-container">
                        <a href="#"><img src="../assets/images/30.png" width="40" height="40" /></a>
                        <a href="#"><img src="../assets/images/31.png" width="40" height="40" /></a>
                        <a href="#"><img src="../assets/images/32.png" width="40" height="40" /></a>
                    </div>
                    <span>或使用您的帐号</span>
                    <input type="email" v-model="loginEmail" placeholder="账号/电子邮箱" />
                    <input type="password" v-model="loginPassword" placeholder="密码" />
                    <button type="button" @click="login">登录</button>
                </form>
            </div>

            <!-- Overlay (切换登录/注册) -->
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>已有帐号？</h1>
                        <p>请使用您的帐号进行登录</p>
                        <button class="ghost" @click="showSignIn">登录</button>
                        <br /><br /><br />
                        <router-link to="/home">返回首页</router-link>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>没有帐号？</h1>
                        <p>立即注册加入我们，和我们一起开始旅程吧</p>
                        <button class="ghost" @click="showSignUp">注册</button>
                        <br /><br /><br />
                        <router-link to="/home">返回首页</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            account: "",
            password: "",
            loginEmail: "",
            loginPassword: "",
        };
    },
    methods: {
        showSignUp() {
            // 添加右侧面板激活的样式
            this.$refs.container.classList.add("right-panel-active");
        },
        showSignIn() {
            // 移除右侧面板激活的样式
            this.$refs.container.classList.remove("right-panel-active");
        },
        register() {
            console.log("注册:", this.username, this.email, this.account, this.password);
            this.$router.push('/panel');
        },
        login() {
            console.log("登录:", this.loginEmail, this.loginPassword);
            this.$router.push('/panel');
        }
    }
};
</script>

<style scoped>
/* 将你提供的 CSS 样式直接放在这里 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* 视口高度 */
    width: 100vw;
    /* 视口宽度 */
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    /* 背景颜色 */
}

h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    line-height: 20px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
    font-weight: bold;
}

.dower {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 20px #ccc;
    position: relative;
    /* 不需要 margin */
    overflow: hidden;
    width: 768px;
    /* 容器宽度 */
    height: 540px;
    /* 容器高度 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 内部垂直居中 */
    align-items: center;
    /* 内部水平居中 */
}

.form-container form {
    background: #fff;
    margin-top: 10px;
    padding: 0 50px;
    height: 100%;
    margin-top: 60px;
    text-align: center;
}

.social-container {
    margin: 20px 0;
}

.social-container a:hover {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999;
}

.form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

button {
    border-radius: 20px;
    border: 1px solid #999;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    transition: transform 80ms ease-in;
}

button:hover {
    transform: scale(1.2);
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background: transparent;
    border-color: #fff;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.overlay {
    background: url(../assets/images/17.jpg) no-repeat;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
}

.overlay a {
    font-size: 18px;
}

.overlay a:hover {
    color: #fff;
}

.overlay-panel {
    position: absolute;
    top: 0;
    margin-top: 150px;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-right {
    right: 0;
    transform: translateY(0);
}

.overlay-left {
    transform: translateY(-20%);
}

.dower.right-panel-active .sign-in-container {
    transform: translateY(100%);
}

.dower.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.dower.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

.dower.right-panel-active .overlay {
    transform: translateX(50%);
}

.dower.right-panel-active .overlay-left {
    transform: translateY(0);
}

.dower.right-panel-active .overlay-right {
    transform: translateY(20%);
}
</style>