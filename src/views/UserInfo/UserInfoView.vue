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
                        <el-input v-model="editUser.hobbies"></el-input>
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

<script src="./UserInfoView.js"></script>
<style src="./UserInfoView.css" scoped></style>