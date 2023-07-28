<template>
	<div class="container-fluid">
		<img src="../assets/contactUsBanner.jpg" class="img-fluid banner">
		<div class="bannerText">聯絡我們</div>
	</div>
	<ContactUs />
</template>

<script setup>
	import ContactUs from '../components/TheContactUs.vue'
</script>

<style scoped>
	.banner {
		position: relative;
		height: 600px;
		width: 100%;
		filter: brightness(50%);
	}
	.bannerText {
		position: absolute;
		font-size: 48px;
		font-weight: 500;
		top: 35%;
		left: 43%;
		color: white;
	}
</style>