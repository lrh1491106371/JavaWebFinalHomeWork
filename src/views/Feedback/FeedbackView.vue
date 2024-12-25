<template>
    <div class="feedback-container">
        <h1>意见反馈</h1>
        <p>感谢您提交宝贵的意见！请填写以下信息：</p>

        <form @submit.prevent="submitFeedback">
            <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" v-model="form.name" placeholder="请输入您的姓名" required />
            </div>

            <div class="form-group">
                <label for="contact">联系方式</label>
                <input type="text" id="contact" v-model="form.contact" placeholder="请输入您的联系方式" required />
            </div>

            <div class="form-group">
                <label for="suggestion">您的建议</label>
                <textarea id="suggestion" v-model="form.suggestion" placeholder="请输入您的宝贵意见" required></textarea>
            </div>

            <button type="submit">提交反馈</button>
        </form>

        <div class="developer-info">
            <h2>开发者信息</h2>
            <div class="info">
                <img src="https://via.placeholder.com/80" alt="开发者头像" class="avatar" />
                <div>
                    <p><strong>姓名：</strong>张三</p>
                    <p><strong>职位：</strong>前端开发工程师</p>
                    <p><strong>邮箱：</strong>developer@example.com</p>
                    <p><strong>GitHub：</strong><a href="https://github.com/developer" target="_blank">GitHub</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./FeedbackView.js"></script>
<style src="./FeedbackView.css" scoped></style>