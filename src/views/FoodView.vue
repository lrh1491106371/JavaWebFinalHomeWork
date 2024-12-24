<template>
    <div class="foodview-container">
        <!-- 使用封装好的组件 -->
        <ColorfulText title="探索美食"
            description="温州美食以鲜香清淡为主，注重食材的原汁原味，代表菜品有鱼丸、麦虾、糯米饭等。鱼丸以鲜美滑嫩闻名，是宴席和家常餐桌上的必备美味；麦虾则是一种用面粉和海鲜制成的小吃，简单又地道。此外，温州还盛产海鲜，特色美食如三丝敲鱼和红烧鱼翅都展现了海洋城市的风味。还有像猪脏粉、小米糕等传统小吃，不仅价格亲民，还深受当地人喜爱。温州人的饮食习惯体现了对自然的热爱和生活的讲究，餐桌文化丰富多样。" />

        <!-- 引用滚动动画组件，并传递动态内容 -->
        <div class="scrolling-container">
            <ScrollingAnimation :tags="tags" :images="images" />
        </div>

        <!-- Food介绍组件 -->
        <div class="container">
            <!-- 使用 FoodCard 组件 -->
            <FoodCard v-for="(food, index) in foods" :key="index" :imageSrc="food.imageSrc" :title="food.title"
                :description="food.description" />
        </div>
    </div>
</template>

<script>
import ColorfulText from "./components/ColorfulText.vue"; // 引入ColorfulText组件
import ScrollingAnimation from "./components/ScrollingAnimation.vue"; // 引入滚动动画组件
import FoodCard from "./components/FoodCard.vue";

export default {
    name: "FoodView",
    components: {
        ColorfulText,
        ScrollingAnimation,
        FoodCard,
    },
    data() {
        return {
            // 动态的标签内容
            tags: ["温州灯盏糕", "长人馄饨", "矾山肉燕", "温州糟羹", "海鲜面", "温州鸭舌", "苍南鱼面"],

            // 动态的图片内容，使用require来正确引入图片
            images: [
                { src: require('@/assets/images/HomeView/11.jpg'), alt: "美食1" },
                { src: require('@/assets/images/HomeView/12.jpg'), alt: "美食2" },
                { src: require('@/assets/images/HomeView/14.jpg'), alt: "美食3" },
                { src: require('@/assets/images/HomeView/15.jpg'), alt: "美食4" },
            ],
            foods: [
                {
                    imageSrc: require("@/assets/images/HomeView/11.jpg"),
                    title: "温州糯米饭",
                    description: "温州糯米饭是一道由糯米、油条和肉末汤组成的特色早点，是温州人的早餐首选。它历史悠久，文化底蕴深厚，深受人们喜爱。制作过程需精心操作，糯米饭软糯、油条酥脆、肉末汤鲜美，搭配丰富多样，成为温州人的一种生活方式。",
                },
                {
                    imageSrc: require("@/assets/images/HomeView/11.jpg"),
                    title: "妲己",
                    description: "远程消耗，攻击范围大",
                },
                {
                    imageSrc: require("@/assets/images/HomeView/12.jpg"),
                    title: "孙尚香",
                    description: "高爆发的射手英雄",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* 为整个页面添加背景，使用渐变色或背景图片 */
.foodview-container {

    background-size: cover;
    padding: 2rem;
    min-height: 100vh;
    color: rgb(0, 0, 0);
    /* 文字颜色设置为白色 */
}

/* 滚动容器 */
.scrolling-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* 高度为100%视口高度 */
    width: 80%;
    /* 宽度设为80%，保持两边有留白 */
    margin: 0 auto;
    /* 使容器水平居中 */
}

/* 滚动内的标签和图片部分 */
.scrolled__inner {
    font-size: 1.5rem;
    /* 增加字体大小 */
}

.scrolled__inner .img {
    width: 200px;
    /* 调整图片宽度 */
    height: auto;
    margin-right: 1rem;
    /* 图片之间的间距 */
}

/* 标签文字样式 */
.tag-list li {
    font-size: 1.25rem;
    /* 增大标签字体 */
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.7);
    /* 背景半透明 */
    color: var(--clr-primary-800);
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.tag-list li:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 1);
    /* 悬停时背景变为不透明 */
}

h1 {
    font-size: 2rem;
    /* 主标题字体大小 */
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
}

/* Food组件样式 */
.container {
    width: 1000px;
    margin: 0px auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 每行显示 3 个组件 */
    gap: 40px;
    /* 每个组件之间的间距 */
    justify-content: center;
    /* 水平方向居中 */
    padding: 20px;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
        /* 屏幕较小时每行显示 2 个 */
    }
}

@media (max-width: 480px) {
    .container {
        grid-template-columns: 1fr;
        /* 手机屏幕上每行显示 1 个 */
    }
}
</style>