<template>
    <div class="wrapper">
        <div class="dower" id="dower" ref="container">
            <!-- 注册表单 -->
            <div class="form-container sign-up-container">
                <form action="../index.html">
                    <h1>注册</h1>
                    <div class="social-container">
                        <a href="#"><img src="@/assets/images/30.png" width="40" height="40" /></a>
                        <a href="#"><img src="@/assets/images/31.png" width="40" height="40" /></a>
                        <a href="#"><img src="@/assets/images/32.png" width="40" height="40" /></a>
                    </div>
                    <span>或使用邮箱注册</span>
                    <input type="text" v-model="username" placeholder="账号名" />
                    <input type="email" v-model="email" placeholder="电子邮箱" />
                    <input type="password" v-model="password" placeholder="密码" />
                    <button type="button" @click="handleRegister">注册</button>
                </form>
            </div>

            <!-- 登录表单 -->
            <div class="form-container sign-in-container">
                <form action="../index.html">
                    <h1>登录</h1>
                    <div class="social-container">
                        <a href="#"><img src="@/assets/images/30.png" width="40" height="40" /></a>
                        <a href="#"><img src="@/assets/images/31.png" width="40" height="40" /></a>
                        <a href="#"><img src="@/assets/images/32.png" width="40" height="40" /></a>
                    </div>
                    <span>或使用您的帐号</span>
                    <input type="email" v-model="username" placeholder="账号" />
                    <input type="password" v-model="password" placeholder="密码" />
                    <button type="button" @click="handleLogin">登录</button>
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

<script src="./LoginView.js" script></script>
<style src="./LoginView.css" scoped></style>        