<template>
    <div class="test-container">
        <h1>FoodCard 组件测试</h1>
        <!-- 测试 FoodCard 组件 -->
        <FoodCard imageUrl="https://via.placeholder.com/300" name="温州糯米饭"
            description="温州糯米饭是一道由糯米、油条和肉末汤组成的特色早点，是温州人的早餐首选。它历史悠久，文化底蕴深厚，深受人们喜爱。制作过程需精心操作，糯米饭软糯、油条酥脆、肉末汤鲜美，搭配丰富多样，成为温州人的一种生活方式。"
            features="软糯鲜香、早餐首选" :rating="9.8" />
    </div>
</template>

<script>
import FoodCard from "@/components/FoodCard.vue"; // 引入 FoodCard 组件

export default {
    name: "TestView",
    components: {
        FoodCard, // 注册组件
    },
};
</script>

<style scoped>
.test-container {
    padding: 20px;
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}
</style>