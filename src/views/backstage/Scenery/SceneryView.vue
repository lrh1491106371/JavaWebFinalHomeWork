<template>
    <div>
        <el-container>
            <!-- 引入独立的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>风景管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="openAddDialog">新增风景</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="风景名称">
                            <el-input v-model="filter.name" placeholder="请输入风景名称"></el-input>
                        </el-form-item>
                        <el-form-item label="位置">
                            <el-input v-model="filter.location" placeholder="请输入位置"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="sceneries" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="100"></el-table-column>
                        <el-table-column prop="image_url" label="图片" width="120">
                            <template #default="scope">
                                <img :src="scope.row.image_url" alt="风景图片"
                                    style="width: 60px; height: 60px; border-radius: 6px;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="风景名称"></el-table-column>
                        <el-table-column prop="location" label="位置" width="150"></el-table-column>
                        <el-table-column prop="description" label="描述">
                            <template #default="scope">
                                <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
                                    <span>{{ scope.row.description.slice(0, 20) }}...</span>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="openEditDialog(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteScenery(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>

        <!-- 弹出框 -->
        <el-dialog :title="isEdit ? '编辑风景' : '新增风景'" v-model:visible="dialogVisible" width="500px">
            <el-form :model="form" ref="formRef">
                <el-form-item label="风景名称" required>
                    <el-input v-model="form.name" placeholder="请输入风景名称"></el-input>
                </el-form-item>
                <el-form-item label="图片 URL" required>
                    <el-input v-model="form.image_url" placeholder="请输入图片链接"></el-input>
                </el-form-item>
                <el-form-item label="位置">
                    <el-input v-model="form.location" placeholder="请输入位置"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="textarea" v-model="form.description" placeholder="请输入描述"></el-input>
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

<script src="./Scenery.js"></script>
<style src="./Scenery.css" scoped></style>