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
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: '/src/assets/1.jpg' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: '/src/assets/2.png' },
                { img: '/src/assets/6.jpg' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: '/src/assets/logo.png' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: './05.png' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: './06.png' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { img: './07.png' },
                { text: 'TEXT' },
                { text: 'TEXT' },
                { text: 'TEXT' },
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));/* 每列至少 250px */
    justify-items: center; /* 水平居中 */
    align-items: center;   /* 垂直居中 */
    margin: 0 auto;        /* 保证容器居中 */
    max-width: 100%;       /* 限制最大宽度 */
    width: 100%;           /* 填满父容器宽度 */
    padding: 0 20px;       /* 内边距，避免卡片贴边 */
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
    height: 100%;
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