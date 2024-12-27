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
            <FoodCard v-for="(food, index) in foods" :key="index" :imageUrl="food.imageUrl" :name="food.name"
                :description="food.description" :features="food.features" :rating="food.rating" />
        </div>
    </div>
</template>

<script src="./FoodView.js"></script>
<style src="./FoodView.css" scoped></style>