<template>
    <div>
        <el-container>
            <!-- Sidebar -->
            <el-aside width="220px" style="background: #f5f7fa; box-shadow: inset -1px 0 0 #ebeef5;">
                <el-menu :default-active="activeIndex" router>
                    <el-menu-item index="/panel">
                        <i class="el-icon-info"></i>
                        <span>仪表盘</span>
                    </el-menu-item>
                    <el-menu-item index="/backHome">
                        <i class="el-icon-info"></i>
                        <span>首页管理</span>
                    </el-menu-item>
                    <el-menu-item index="/backCulture">
                        <i class="el-icon-info"></i>
                        <span>文化管理</span>
                    </el-menu-item>
                    <el-menu-item index="/backFood">
                        <i class="el-icon-info"></i>
                        <span>美食管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackScenery">
                        <i class="el-icon-info"></i>
                        <span>风景管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackUserInfo">
                        <i class="el-icon-info"></i>
                        <span>用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/BackFeedback">
                        <i class="el-icon-info"></i>
                        <span>反馈管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

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

<script>
export default {
    data() {
        return {
            activeIndex: "/backFood",
            filter: {
                name: "",
                rating: "",
            },
            loading: false,
            specialties: [
                {
                    id: 1,
                    image_url: "https://placekitten.com/40/40",
                    name: "温州鱼丸",
                    description: "温州特色鱼丸，味道鲜美。",
                    features: "软嫩、多汁",
                    rating: 4.5,
                },
                {
                    id: 2,
                    image_url: "https://placekitten.com/40/40",
                    name: "温州鸭舌",
                    description: "传统工艺制作的温州美食。",
                    features: "咸鲜、香辣",
                    rating: 4.7,
                },
            ],
        };
    },
    methods: {
        onSearch() {
            console.log("搜索条件：", this.filter);
        },
        onReset() {
            this.filter = { name: "", rating: "" };
        },
        addSpecialty() {
            console.log("新增美食");
        },
        editSpecialty(specialty) {
            console.log("编辑美食", specialty);
        },
        deleteSpecialty(specialty) {
            console.log("删除美食", specialty);
        },
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