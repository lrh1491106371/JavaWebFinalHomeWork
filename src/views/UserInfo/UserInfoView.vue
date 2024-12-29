<template>
    <div class="user-info-container">
        <!-- 左侧个人信息部分 -->
        <div class="left-section">
            <div class="avatar">
                <img :src="user.avatarUrl" alt="User Avatar" />
            </div>
            <div class="user-details">
                <div class="info-item" v-for="(value, label) in userInfoFormatted" :key="label">
                    <label>{{ label }}：</label>
                    <span>{{ value }}</span>
                </div>
            </div>
        </div>

        <!-- 右侧个人简介部分 -->
        <div class="right-section">
            <div class="profile">
                <h2>个人简介</h2>
                <p>{{ user.resume || '暂无简介' }}</p>
            </div>
        </div>
    </div>
</template>

<script src="./UserInfoView.js"></script>
<style src="./UserInfoView.css" scoped></style>