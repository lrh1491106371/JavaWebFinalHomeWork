<template>
    <div>
        <el-container>
            <!-- 引入独立的导航栏组件 -->
            <BackNavBar :activeIndex="activeIndex" />

            <!-- Main Content -->
            <el-container>
                <el-header
                    style="background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h3>文化管理</h3>
                    <el-button type="primary" icon="el-icon-plus" @click="addCulture">新增文化</el-button>
                </el-header>
                <el-main>
                    <el-form :inline="true" :model="filter" class="demo-form-inline">
                        <el-form-item label="文化名称">
                            <el-input v-model="filter.name" placeholder="请输入文化名称"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input v-model="filter.origin_period" placeholder="请输入描述"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSearch">搜索</el-button>
                            <el-button @click="onReset">重置</el-button>
                        </el-form-item>
                    </el-form>

                    <el-table :data="cultures" border style="width: 100%" v-loading="loading">
                        <el-table-column prop="id" label="编号" width="100"></el-table-column>
                        <el-table-column prop="image_url" label="图片" width="120">
                            <template #default="scope">
                                <img :src="scope.row.image_url" alt="文化图片"
                                    style="width: 60px; height: 60px; border-radius: 6px;" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="文化名称"></el-table-column>
                        <el-table-column prop="origin_period" label="起源时期" width="150"></el-table-column>
                        <el-table-column prop="description" label="描述">
                            <template #default="scope">
                                <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
                                    <span>{{ scope.row.description.slice(0, 20) }}...</span>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="180">
                            <template #default="scope">
                                <el-button size="small" @click="editCulture(scope.row)">修改</el-button>
                                <el-button size="small" type="danger" @click="deleteCulture(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import BackNavBar from "@/components/BackNavBar.vue";
import axios from "axios";

export default {
    components: { BackNavBar },
    data() {
        return {
            activeIndex: "/BackCulture",
            filter: {
                name: "",
                origin_period: "",
            },
            loading: false,
            cultures: [], // 用于存储文化数据
        };
    },
    methods: {
        async fetchCultures() {
            this.loading = true;
            try {
                const response = await axios.get("/api/culture", {
                    params: this.filter,
                });
                this.cultures = response.data;
            } catch (error) {
                console.error("获取文化数据失败:", error);
            } finally {
                this.loading = false;
            }
        },
        onSearch() {
            this.fetchCultures();
        },
        onReset() {
            this.filter = { name: "", origin_period: "" };
            this.fetchCultures();
        },
        addCulture() {
            console.log("新增文化");
            // 打开新增文化的弹窗或跳转到新增页面
        },
        editCulture(culture) {
            console.log("编辑文化", culture);
            // 打开编辑文化的弹窗或跳转到编辑页面
        },
        deleteCulture(culture) {
            console.log("删除文化", culture);
            // 确认删除并调用后端 API
        },
    },
    mounted() {
        this.fetchCultures(); // 页面加载时获取文化数据
    },
};
</script>

<style scoped>
.el-header {
    border-bottom: 1px solid #ebeef5;
}

.el-main {
    padding: 20px;
}
</style>