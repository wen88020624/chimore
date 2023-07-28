<template>
	<div class="container-fluid">
		<img src="../assets/introBanner.jpg" class="img-fluid banner">
		<div class="bannerText">認識奇模</div>
	</div>
	<div class="row text-center employeeIntro  align-items-center">
		<div class="col-6">
			<img src="../assets/introCEO.jpg" class="ceo">
			<h4>總經理 王佩模</h4>
		</div>
		<div class="col-6">
			<h3 class="IntroTitle">經歷</h3>
			<p class="ceoIntroText">
				臺北市都市計畫技師公會理事<br>
				中國文化大學都市計畫與開發管理學系兼任講師<br>
				社團法人臺北市都市更新整合發展協會會員(法宣專案講師)<br>
				新北市都市更新學會理事(法宣專案講師)<br>
				九十一年高等考試都市計畫技師<br>
				國立成功大學都市計畫研究所碩士
			</p>
		</div>
	</div>
	<div>
		<h3 class="IntroTitle text-center">專業團隊</h3>
		<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
		<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
		<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
	</div>
	<div>
		<h3 class="IntroTitle text-center">公司環境</h3>
				<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
		<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
		<div class="row d-flex justify-content-around IntroBox">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
			<img src="../assets/workspaceEnv.jpg" class="workspaceEnv">
		</div>
	</div>
</template>

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
		top: 38%;
		left: 43%;
		color: white;
	}
	.employeeIntro {
		position: relative;
		padding-top: 5%;
		padding-bottom: 10%;
	}
	.ceo {
		padding: 10%;
		height: 500px;
		width: auto;
		border-radius: 50%;
	}
	.IntroTitle {
		border-bottom: 1px solid lightgray;
		padding-top: 5%;
		padding-bottom: 20px;
	}
	.ceoIntroText {
		padding-top: 20px;
		padding-bottom: 5%;
		letter-spacing: 3px;
		line-height: 40px;
		font-size: 20px;
	}
	.workspaceEnv {
		height: 200px;
		width: auto;
	}
	.IntroBox {
		padding-top: 2%;
		padding-bottom: 2%;
	}
</style>