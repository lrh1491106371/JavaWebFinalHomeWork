<template>
    <div>
        <el-container>
            <!-- 引入独立的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>用户管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="openAddDialog">新增用户</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="用户名">
                            <el-input v-model="filter.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="filter.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="users" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="100"></el-table-column>
                        <el-table-column prop="username" label="用户名"></el-table-column>
                        <el-table-column prop="email" label="邮箱"></el-table-column>
                        <el-table-column prop="phone" label="手机号码"></el-table-column>
                        <el-table-column prop="birthday" label="生日" width="150"></el-table-column>
                        <el-table-column prop="status" label="状态" width="150">
                            <template #default="scope">
                                <el-tag :type="scope.row.status === 'active' ? 'success' : 'danger'">
                                    {{ scope.row.status === 'active' ? '活跃' : '禁用' }}
                                </el-tag>
                            </template>
                        </el-table-column>
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
        <el-dialog :title="isEdit ? '编辑用户' : '新增用户'" v-model:visible="dialogVisible" width="500px">
            <el-form :model="form" ref="formRef">
                <el-form-item label="用户名" required>
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" required>
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="form.phone" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker v-model="form.birthday" placeholder="请选择生日" type="date"
                        format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="头像">
                    <el-input v-model="form.avatar_url" placeholder="请输入头像 URL"></el-input>
                </el-form-item>
                <el-form-item label="爱好">
                    <el-input v-model="form.hobbies" placeholder="请输入爱好"></el-input>
                </el-form-item>
                <el-form-item label="个人简历">
                    <el-input type="textarea" v-model="form.resume" placeholder="请输入个人简历"></el-input>
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