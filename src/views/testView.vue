<template>
  <div>
    <!-- 直接显示图片 -->
    <img 
      :src="imageUrl" 
      alt="测试图片" 
      style="max-width: 400px; border: 1px solid #ddd; padding: 10px;" 
    />
    <p>图片地址: {{ imageUrl }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 测试用的图片 URL
      imageUrl: "https://javawebfinalhomework.oss-cn-hangzhou.aliyuncs.com/03947532-4e7d-48c8-8f72-83084322d303.jpg",
    };
  },
};
</script>

<style scoped>
/* 样式可选 */
</style>