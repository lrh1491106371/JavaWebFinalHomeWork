<template>
    <div>
        <el-container>
            <!-- 引入独立的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>用户信息管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="openAddDialog">新增用户</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="搜索内容">
                            <el-input v-model="keyword" placeholder="请输入搜索内容"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="users" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="100"></el-table-column>
                        <el-table-column prop="avatarUrl" label="头像" width="120">
                            <template #default="scope">
                                <img :src="scope.row.avatarUrl" alt="用户头像"
                                    style="width: 60px; height: 60px; border-radius: 6px;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="username" label="账号"></el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="email" label="邮箱"></el-table-column>
                        <el-table-column prop="phone" label="电话"></el-table-column>
                        <el-table-column prop="birthday" label="生日" :formatter="formatDate">
                        </el-table-column>
                        <el-table-column prop="hobbies" label="爱好"></el-table-column>
                        <el-table-column prop="resume" label="个人简介"></el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="openEditDialog(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteUser(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>

        <!-- 弹出框 -->
        <el-dialog :title="isEdit ? '编辑用户' : '新增用户'" v-model="dialogVisible" width="500px">
            <el-form :model="form" ref="formRef">
                <el-form-item label="账号" required>
                    <el-input v-model="form.username" placeholder="请输入账号" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.phone" placeholder="请输入电话"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker v-model="form.birthday" placeholder="请选择生日" style="width: 100%" format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="爱好">
                    <el-input v-model="form.hobbies" placeholder="请输入爱好" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="个人简介">
                    <el-input v-model="form.resume" placeholder="请输入个人简介" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload class="avatar-uploader" action="uploadUrl" name="image" :show-file-list="false"
                        :http-request="uploadAvatar" :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar"
                            style="width: 100px; height: 100px; object-fit: cover; border-radius: 4px;" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <el-button v-if="!form.avatarUrl" size="small" type="primary" style="margin-top: 10px;">
                            上传头像
                        </el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="密码" required>
                    <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <template v-slot:footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleSave">保存</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>


<script src="./UserInfoView.js"></script>
<style src="./UserInfoView.css" scoped></style>