<template>
    <div class="user-info-container">
        <!-- 左侧个人信息部分 -->
        <div class="left-section">
            <div class="avatar">
                <img :src="user.avatarUrl" alt="User Avatar" />
            </div>
            <div class="user-details">
                <div class="info-item" v-for="(value, label) in userInfo" :key="label">
                    <label>{{ label }}：</label>
                    <span>{{ value }}</span>
                </div>
            </div>
            <el-button size="medium" type="primary" @click="openEditDialog('info')">编辑个人信息</el-button>
        </div>

        <!-- 右侧个人简介部分 -->
        <div class="right-section">
            <div class="profile">
                <h2>个人简介</h2>
                <p>{{ user.profile }}</p>
                <el-button size="medium" type="primary" @click="openEditDialog('profile')">编辑个人简介</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                avatarUrl: 'https://via.placeholder.com/150',
                name: '张三',
                username: 'zhangsan123',
                birthday: '1990-01-01',
                phone: '13800000000',
                email: 'zhangsan@example.com',
                hobbies: ['阅读', '旅行', '编程'],
                profile: '热爱编程，喜欢旅行，致力于成为一名全栈工程师。',
            },
        };
    },
    computed: {
        userInfo() {
            return {
                姓名: this.user.name,
                账号: this.user.username,
                生日: this.user.birthday,
                手机: this.user.phone,
                邮箱: this.user.email,
                爱好: this.user.hobbies.join(', '),
            };
        },
    },
    methods: {
        openEditDialog(type) {
            alert(`打开${type}编辑框`);
        },
    },
};
</script>

<style scoped>
.user-info-container {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa, #e4ebf1);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-section {
    width: 30%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.left-section .avatar img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
}

.left-section .info-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 14px;
    color: #333;
}

.right-section {
    width: 65%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.right-section h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.right-section p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
}

.el-button {
    margin-top: 20px;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.el-button:hover {
    background-color: #5a9bd4;
    color: #fff;
}
</style>