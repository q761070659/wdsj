<template>
  <img :src="img" alt="pig" class="pig-deco" />
</template>

<script setup>
const pigs = [
  '/wdsj/不赖猪.jpg', '/wdsj/俯视猪.jpg', '/wdsj/分布猪.png', '/wdsj/唱片猪(旋转猪).gif',
  '/wdsj/干嘛…….jpg', '/wdsj/抽象猪.png', '/wdsj/拱翻群友.jpg', '/wdsj/更多的猪.jpg',
  '/wdsj/畅销猪.png', '/wdsj/笨蛋.png', '/wdsj/董卓猪(真是一对苦命鸳鸯啊).png',
  '/wdsj/诶_.png', '/wdsj/辅猪 (1).jpg', '/wdsj/当你想对我恶语相向时,请注意屏幕后面的我可是这样的.jpg',
]
const img = pigs[Math.floor(Math.random() * pigs.length)]
</script>

<style scoped>
.pig-deco {
  display: block;
  margin: 24px auto;
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 16px;
  opacity: 0.85;
}
</style>
