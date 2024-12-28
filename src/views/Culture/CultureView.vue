<template>
    <div id="app">
        <!-- 使用封装好的组件 -->
        <div>
            <ColorfulText title="探索文化"
                description="温州是浙江省东南部的一座历史文化名城，拥有2000多年历史，素有“东南山水甲天下”之称。这里是南戏的发源地，被誉为中国戏曲的摇篮，同时以温州鼓词等非物质文化遗产闻名。温州的民俗文化丰富多彩，元宵灯会、清明踏青等活动展现了独特的地域风情，传统工艺如瓯塑、瓯绣也体现了浓厚的地方特色。温州还是“侨乡”，华侨遍布世界各地，对外交流频繁。作为山海相依的城市，其美食如温州鱼丸、麦虾更是承载了地道的温州味道。" />
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
                <el-col :span="12" v-for="(section, index) in sections" :key="index">
                    <HistoryItem :imageUrl="section.imageUrl" :name="section.name" :description="section.description" :originPeriod="section.originPeriod" :culturalImpact="section.culturalImpact" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script src="./Culture.js"></script>
<style src="./Culture.css" scoped></style>