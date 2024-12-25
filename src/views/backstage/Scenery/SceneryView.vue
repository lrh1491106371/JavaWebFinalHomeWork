<template>
    <div>
        <el-container>
            <!-- 使用封装好的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>风景管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="addScenery">新增风景</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="风景名称">
                            <el-input v-model="filter.name" placeholder="请输入风景名称"></el-input>
                        </el-form-item>
                        <el-form-item label="最佳季节">
                            <el-input v-model="filter.best_season" placeholder="请输入最佳季节"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="sceneryList" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="80"></el-table-column>
                        <el-table-column prop="image_url" label="图片" width="120">
                            <template #default="scope">
                                <img :src="scope.row.image_url" alt="风景图片"
                                    style="width: 60px; height: 60px; border-radius: 5px;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                        <el-table-column prop="location" label="位置"></el-table-column>
                        <el-table-column prop="best_season" label="最佳季节"></el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="editScenery(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteScenery(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script src="./Scenery.js"></script>
<style src="./Scenery.css" scoped></style>