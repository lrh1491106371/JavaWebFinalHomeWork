<template>
    <div id="app">
        <!-- 使用封装好的组件 -->
        <div>
            <ColorfulText title="探索文化"
                description="Discover the amazing food culture of Wenzhou. From fresh seafood to local snacks, every bite is a taste of history." />
        </div>

        <!-- 轮播图 -->
        <el-carousel indicator-position="outside" height="600px">
            <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
                <img :src="item" class="carousel-img" />
            </el-carousel-item>
        </el-carousel>

        <!-- 三栏内容 -->
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="8" v-for="(section, index) in sections" :key="index">
                    <HistoryItem :image="section.image" :title="section.title" :description="section.description" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import ColorfulText from "@/views/components/ColorfulText.vue"; // 引入组件
import HistoryItem from "@/views/components/CultureItem.vue"; // 引入新的HistoryItem组件

export default {
    name: 'CultureView',
    components: {
        ColorfulText,
        HistoryItem,
    },
    data() {
        return {
            carouselImages: [
                require("../assets/images/拉萨/10.jpg"),
                require("../assets/images/拉萨/11.jpg"),
                require("../assets/images/拉萨/12.jpg"),
            ],
            sections: [
                {
                    image: require("../assets/images/拉萨/10.jpg"),
                    title: "人间至味邂逅",
                    description: "描述内容1...",
                },
                {
                    image: require("../assets/images/拉萨/11.jpg"),
                    title: "巅越文化长廊",
                    description: "描述内容2...",
                },
                {
                    image: require("../assets/images/拉萨/12.jpg"),
                    title: "山海温州画卷",
                    description: "描述内容3...",
                },
                {
                    image: require("../assets/images/拉萨/10.jpg"),
                    title: "山海温州画卷",
                    description: "描述内容4...",
                },
                {
                    image: require("../assets/images/拉萨/11.jpg"),
                    title: "山海温州画卷",
                    description: "描述内容5...",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* 轮播图效果 */
.el-carousel {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.carousel-img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

/* 三栏内容 */
.container {
    width: 1200px;
    margin: 20px auto;
    text-align: center;
}
</style>