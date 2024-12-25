<template>
    <div>
        <el-container>
            <!-- 引入封装好的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>美食管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="addSpecialty">新增美食</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="美食名称">
                            <el-input v-model="filter.name" placeholder="请输入美食名称"></el-input>
                        </el-form-item>
                        <el-form-item label="评分">
                            <el-input v-model="filter.rating" placeholder="请输入评分"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="specialties" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="100"></el-table-column>
                        <el-table-column prop="image_url" label="美食图片" width="120">
                            <template #default="scope">
                                <img :src="scope.row.image_url" alt="美食图片"
                                    style="width: 40px; height: 40px; border-radius: 5%;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="美食名称"></el-table-column>
                        <el-table-column prop="description" label="描述"></el-table-column>
                        <el-table-column prop="features" label="特点"></el-table-column>
                        <el-table-column prop="rating" label="评分" width="80"></el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="editSpecialty(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteSpecialty(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script src="./FoodView.js"></script>
<style src="./FoodView.css" scoped></style>