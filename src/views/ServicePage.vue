<template>
	<div class="container-fluid">
		<img src="../assets/serviceBanner.jpg" class="img-fluid banner">
		<div class="bannerText">服務項目</div>
	</div>
	<div class="row service text-center">
		<figure class="col-4">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceImg rounded-circle">
			<figcaption class="serviceTitle">都市土地規劃及變更</figcaption>
		</figure>
		<figure class="col-4">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceImg rounded-circle">
			<figcaption class="serviceTitle">非都市土地規劃及變更</figcaption>
		</figure>
		<figure class="col-4">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceImg rounded-circle">
			<figcaption class="serviceTitle">都市更新</figcaption>
		</figure>
	</div>
	<div class="row serviceDes text-center align-items-center">
		<figure class="col-6">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceDesImg rounded-circle">
		</figure>
		<figcaption class="col-6">
			<h2 class="serviceDesTitle">都市土地規劃及變更</h2>
			<p class="serviceDesText">
				新訂與擴大都市計畫<br>
				通盤檢討<br>
				工業區、農業區及各類特定專用區個案變更<br>
				重大公共建設用地個案變更<br>
				自辦或公辦都市更新<br>
				區段徵收、市地重劃可行性評估<br>
				開發策略與整體規劃研究<br>
				容許使用申請<br>
			</p>
		</figcaption>
	</div>
		<div class="row serviceDes text-center align-items-center">
		<figure class="col-6">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceDesImg rounded-circle">
		</figure>
		<figcaption class="col-6">
			<h2 class="serviceDesTitle">非都市土地規劃及變更</h2>
			<p class="serviceDesText">
				商業區、住宅區、工業區<br>
				海砂屋<br>
				非都市土地開發申請
			</p>
		</figcaption>
	</div>
		<div class="row serviceDes text-center align-items-center">
		<figure class="col-6">
			<img src="../assets/serviceImg.jpg" class="img-fluid serviceDesImg rounded-circle">
		</figure>
		<figcaption class="col-6">
			<h2 class="serviceDesTitle">都市更新</h2>
			<p class="serviceDesText">
				新訂與擴大都市計畫<br>
				通盤檢討<br>
				工業區、農業區及各類特定專用區個案變更<br>
				重大公共建設用地個案變更<br>
				自辦或公辦都市更新<br>
				區段徵收、市地重劃可行性評估<br>
				開發策略與整體規劃研究<br>
				容許使用申請<br>
			</p>
		</figcaption>
	</div>
</template>

<script></script>

<style>
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
		top: 38%;
		left: 43%;
		color: white;
	}
	.service {
		position: relative;
		padding-top: 10%;
		padding-bottom: 10%;
	}
	.serviceImg {
		height: 150px;
		width: auto;
	}
	.serviceDesImg {
		height: 500px;
		width: auto;
	}
	.serviceDes {
		padding-top: 5%;
		padding-bottom: 5%;
	}
	.serviceDesTitle {
		font-size: 25px;
		color: dimgray;
		border-bottom: 1px solid lightgray;
		padding-bottom: 10px;
	}
	.serviceDesText {
		text-align: left;
		font-size: 18px;
		letter-spacing: 3px;
		line-height: 60px;
	}
</style>