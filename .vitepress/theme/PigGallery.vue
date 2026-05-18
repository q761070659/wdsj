<template>
  <div class="pig-gallery">
    <img v-for="img in images" :key="img" :src="img" :alt="img" />
  </div>
</template>

<script setup>
const images = [
  '/wdsj/不赖猪.jpg',
  '/wdsj/俯视猪.jpg',
  '/wdsj/分布猪.png',
  '/wdsj/唱片猪(旋转猪).gif',
  '/wdsj/干嘛…….jpg',
  '/wdsj/抽象猪.png',
  '/wdsj/拱翻群友.jpg',
  '/wdsj/更多的猪.jpg',
  '/wdsj/畅销猪.png',
  '/wdsj/笨蛋.png',
  '/wdsj/董卓猪(真是一对苦命鸳鸯啊).png',
  '/wdsj/诶_.png',
  '/wdsj/辅猪 (1).jpg',
  '/wdsj/当你想对我恶语相向时,请注意屏幕后面的我可是这样的.jpg',
]
</script>

<style scoped>
.pig-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 48px 24px;
}
.pig-gallery img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.2s;
}
.pig-gallery img:hover {
  transform: scale(1.1);
}
</style>
