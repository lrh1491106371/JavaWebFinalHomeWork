<template>
    <div class="container">
        <div class="cards">
            <div class="card" v-for="(item, index) in cardItems" :key="index">
                <div v-if="item.text">{{ item.text }}</div>
                <img v-else :src="item.img" alt="Card Image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardItems: [
                { img: require('@/assets/images/HomeView/2.jpg') },
                { text: '温州鱼丸' },
                { text: '米面年糕' },
                { text: '矾山肉燕' },
                { img: require('@/assets/images/HomeView/1.jpg') },
                { img: require('@/assets/images/HomeView/3.jpg') },
                { text: '江心屿' },
                { img: require('@/assets/images/HomeView/5.jpg') },
                { img: require('@/assets/images/HomeView/6.jpg') },
                { img: require('@/assets/images/HomeView/7.jpg') },
                { img: require('@/assets/images/HomeView/4.jpg') },
                { img: require('@/assets/images/HomeView/8.jpg') },
                { img: require('@/assets/images/HomeView/9.jpg') },
                { text: '洞头列岛' },
                { img: require('@/assets/images/HomeView/10.jpg') },
                { text: '雁荡山' },
                { img: require('@/assets/images/HomeView/11.jpg') },
                { text: '永嘉学派' },
                { img: require('@/assets/images/HomeView/14.jpg') },
                { mg: require('@/assets/images/HomeView/16.jpg') },
                { text: '猪肉汤圆' },
                { img: require('@/assets/images/HomeView/12.jpg') },
                { text: '瓯绣工艺' },
                { text: '米塑艺术' },
                { text: '百丈漈' },
                { img: require('@/assets/images/HomeView/15.jpg') },
                { img: require('@/assets/images/HomeView/12.jpg') },
                { text: '瓯窑文化' },
            ],
        };
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.container {
    max-width: 1200px;
    /* 最大宽度限制 */
    margin: 0 auto;
    /* 居中 */
    padding: 0 20px;
    /* 两侧留白 */
}

body {
    min-block-size: 100%;
    display: grid;
    place-content: center;
    padding-block: 30dvh;
    background: #f7d6ff;
}

@keyframes slide-fade-in {
    from {
        opacity: 0;
        box-shadow: none;
        transform: scale(0.8) translateY(15vh);
    }
}

.cards {
    display: grid;
    gap: 2rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* 每列至少 250px */
    justify-items: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    margin: 0 auto;
    /* 保证容器居中 */
    max-width: 100%;
    /* 限制最大宽度 */
    width: 100%;
    /* 填满父容器宽度 */
    padding: 0 20px;
    /* 内边距，避免卡片贴边 */
}

.card {
    animation: slide-fade-in 1s both;
    animation-timeline: view();
    /* animation-range: contain 0% contain 50%; */
    border-radius: 10px;
    line-height: 6;
    box-shadow: 0px 8px 20px #00000022;
    font-size: 32px;
    letter-spacing: 5px;
    color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(to bottom right,
            #91defe,
            #99c0f9,
            #bdb6ec,
            #d7b3e3,
            #efb3d5,
            #f9bccc);
    display: flex;
    justify-content: center;
    align-items: center;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    /* 图片裁剪以填满卡片 */
    border-radius: 10px;
    /* 与卡片保持一致的圆角 */
}

.card:nth-of-type(4n) {
    grid-column: span 2;
}

.card:nth-of-type(5n) {
    grid-column: span 2;
}

.card:nth-of-type(7n) {
    grid-row: span 2;
}
</style>