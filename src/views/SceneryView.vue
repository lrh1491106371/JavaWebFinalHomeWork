<template>
    <div class="scenery-view">
        <!-- 使用封装好的标题组件 -->
        <ColorfulText title="探索美景"
            description="Discover the amazing food culture of Wenzhou. From fresh seafood to local snacks, every bite is a taste of history." />

        <!-- 热门景点 -->
        <div class="hot-destinations">
            <p class="section-title">热门景点</p>
            <p class="section-subtitle">Popular Destinations</p>
            <ul class="destination-list main">
                <li v-for="(item, index) in destinations" :key="index" class="destination-item">
                    <img :src="item.image" :alt="item.name" class="destination-image" />
                    <div class="flag">{{ item.name }}</div>
                </li>
            </ul>
        </div>

        <!-- 热门攻略 -->
        <div class="hot-strategies">
            <p class="section-title">热门攻略</p>
            <p class="section-subtitle">Popular Strategies</p>
            <div class="strategy-list">
                <div class="strategy-row" v-for="(row, rowIndex) in chunkedStrategies" :key="rowIndex">
                    <StrategyItem v-for="(strategy, index) in row" :key="index" :strategy="strategy" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorfulText from "@/views/components/ColorfulText.vue"; // 引入标题组件
import StrategyItem from "@/views/components/StrategyItem.vue"; // 引入封装的 StrategyItem 组件

export default {
    name: "SceneryView",
    components: {
        ColorfulText,
        StrategyItem,
    },
    data() {
        return {
            destinations: [
                { name: "布达拉宫", image: require("@/assets/images/拉萨/10.jpg") },
                { name: "大昭寺", image: require("@/assets/images/拉萨/10.jpg") },
                { name: "八墩街", image: require("@/assets/images/拉萨/11.jpg") },
                { name: "西藏博物馆", image: require("@/assets/images/拉萨/10.jpg") },
                { name: "纳木措", image: require("@/assets/images/拉萨/11.jpg") },
                { name: "罗布林卡", image: require("@/assets/images/拉萨/12.jpg") },
            ],
            strategies: [
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/拉萨/10.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/拉萨/10.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/拉萨/12.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/拉萨/11.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/拉萨/12.jpg"),
                },
            ],
        };
    },
    computed: {
        // 将攻略数据每3个分成一组
        chunkedStrategies() {
            const chunkSize = 4;
            const chunks = [];
            for (let i = 0; i < this.strategies.length; i += chunkSize) {
                chunks.push(this.strategies.slice(i, i + chunkSize));
            }
            return chunks;
        },
    },
};
</script>

<style scoped>
/* 公共样式 */
.scenery-view {
    width: 100%;
    /* 确保宽度为视口宽度 */
    max-width: 100vw;
    /* 防止溢出视口宽度 */
    overflow-x: hidden;
    /* 禁止页面左右滚动 */
    padding: 20px;
    box-sizing: border-box;
    /* 确保 padding 不会导致溢出 */
}

/* 热门景点样式 */
.hot-destinations {
    margin: 20px auto;
    text-align: center;
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.section-subtitle {
    font-size: 16px;
    color: #888;
    margin-bottom: 20px;
}

/* 热门景点样式 */
.main {
    width: 1092px;
    height: 534px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    position: relative;
}

.main li {
    height: 100%;
    flex: 1;
    border: 1px solid #999;
    position: relative;
    transition: all 0.5s ease;
    overflow: hidden;
}

.main li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.main li:hover img {
    transform: scale(1.1);
}

.main:hover li {
    flex: 0.9;
    transition: all 0.5s ease;
}

.main li:hover {
    flex: 3.5;
}

.flag {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

/* 热门攻略样式 */
.hot-strategies {
    width: 1000px;
    margin: 20px auto;
    text-align: center;
}
.strategy-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;/* 水平居中 */
}

.strategy-row {
    display: flex;
    justify-content: center;
    gap: 20px;/* 可选，增加子项之间的间距 */
}
</style>