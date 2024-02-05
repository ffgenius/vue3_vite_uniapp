<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">{{ count }}</text>
      <u-button type="primary" text="确定"></u-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/count'

const { count } = useCounterStore()
const title = ref('Hello')

onMounted(() => {
  // http<IResDate_2<string>>({
  //   url: 'http://localhost:3000/co/req'
  // }).then(res => {
  //   console.log(111, res.data)
  // })
  console.log(import.meta.env.VITE_BASE_URL)
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
