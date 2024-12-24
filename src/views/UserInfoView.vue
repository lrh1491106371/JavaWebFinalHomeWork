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

        <!-- 个人信息编辑框 -->
        <el-dialog v-model="editInfoDialogVisible" title="编辑个人信息" width="500px">
            <div class="edit-form">
                <el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-success="handleAvatarUpload">
                    <img v-if="user.avatarUrl" :src="user.avatarUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-form :model="editUser" label-width="100px">
                    <el-form-item label="姓名">
                        <el-input v-model="editUser.name"></el-input>
                    </el-form-item>
                    <el-form-item label="账号">
                        <el-input v-model="editUser.username"></el-input>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-date-picker v-model="editUser.birthday" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input v-model="editUser.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="editUser.email"></el-input>
                    </el-form-item>
                    <el-form-item label="爱好">
                        <el-select v-model="editUser.hobbies" multiple placeholder="选择爱好">
                            <el-option label="阅读" value="阅读"></el-option>
                            <el-option label="旅行" value="旅行"></el-option>
                            <el-option label="编程" value="编程"></el-option>
                            <el-option label="运动" value="运动"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <el-button @click="editInfoDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="saveInfo">保存</el-button>
            </template>
        </el-dialog>

        <!-- 个人简介编辑框 -->
        <el-dialog v-model="editProfileDialogVisible" title="编辑个人简介" width="500px">
            <el-input type="textarea" v-model="editUser.profile" :rows="6" placeholder="请输入个人简介"></el-input>
            <template #footer>
                <el-button @click="editProfileDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="saveProfile">保存</el-button>
            </template>
        </el-dialog>
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
            editUser: {}, // 用于存储编辑时的临时数据
            editInfoDialogVisible: false, // 控制个人信息编辑框的显示
            editProfileDialogVisible: false, // 控制个人简介编辑框的显示
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
            if (type === 'info') {
                this.editUser = { ...this.user }; // 深拷贝用户信息到编辑对象
                this.editInfoDialogVisible = true;
            } else if (type === 'profile') {
                this.editUser = { profile: this.user.profile }; // 仅复制简介
                this.editProfileDialogVisible = true;
            }
        },
        saveInfo() {
            Object.assign(this.user, this.editUser); // 更新用户信息
            this.editInfoDialogVisible = false;
        },
        saveProfile() {
            this.user.profile = this.editUser.profile; // 更新用户简介
            this.editProfileDialogVisible = false;
        },
    },
};
</script>

<style scoped>
.user-info-container {
    display: flex;
    gap: 20px;
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa, #e4ebf1);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-section,
.right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.left-section {
    max-width: 300px;
}

.avatar {
    border-radius: 50%;
    /* 确保头像是圆形 */
    width: 120px;
    /* 设置宽度 */
    height: 120px;
    /* 设置高度，确保宽高一致 */
    object-fit: cover;
    /* 保持图片内容比例 */
    margin: 0 auto 20px;
}

.info-item {
    margin: 10px 0;
    display: flex;
    align-items: center;
    font-size: 14px;
}

.info-item label {
    width: 80px;
    text-align: right;
    margin-right: 10px;
}

.right-section h2 {
    font-size: 20px;
    color: #333;
}

.right-section p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.el-button {
    border-radius: 20px;
    transition: all 0.3s ease;
    margin-top: 20px;
}

.el-button:hover {
    background-color: #5a9bd4;
    color: #fff;
}

.avatar-uploader {
    display: block;
    margin: 0 auto 20px;
    width: 120px;
    height: 120px;
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    /* 确保上传区域是圆形 */
    overflow: hidden;
    /* 隐藏超出的图片部分 */
    position: relative;
    cursor: pointer;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c8c8c;
    text-align: center;
    line-height: 120px;
}
</style>