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

<script>
export default {
    name: 'FeedbackView',
    data() {
        return {
            form: {
                name: '',
                contact: '',
                suggestion: ''
            }
        };
    },
    methods: {
        submitFeedback() {
            // 提交反馈的处理逻辑
            console.log('反馈已提交：', this.form);
            alert('感谢您的反馈！');
            this.form.name = '';
            this.form.contact = '';
            this.form.suggestion = '';
        }
    }
};
</script>

<style scoped>
.feedback-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #70b7f2;
}

p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    height: 150px;
    /* 增加建议框的高度 */
    resize: vertical;
    /* 允许用户调整大小 */
}

button {
    width: 100%;
    padding: 10px;
    background-color: #70b7f2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}

.developer-info {
    margin-top: 40px;
    border-top: 2px solid #ccc;
    padding-top: 20px;
}

.developer-info .info {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.developer-info .info .avatar {
    border-radius: 50%;
    margin-right: 15px;
}

.developer-info a {
    color: #007BFF;
}

.developer-info a:hover {
    text-decoration: underline;
}
</style>