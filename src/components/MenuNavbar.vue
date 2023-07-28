<template> 
   <nav id="menu" class="navbar navbar-expand-lg">
		<div class="col-6 d-flex justify-content-center">
			<figure href="#" class="navbar-brand">
				<img src="../assets/chimore.png" class="align-text-top" alt="Logo" width="25">
					奇模工程有限公司
			</figure>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse col-6 d-flex justify-content-center" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" class="nav-link active">首頁</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/intro" class="nav-link">公司簡介</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/service" class="nav-link">服務項目</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/projects" class="nav-link">實例佳績</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/contactUs" class="nav-link">聯絡我們</router-link>
				</li>
			</ul>
		</div>
   </nav>
</template>

<style scoped>
	#menu {
		background-color: Gainsboro;
/*		background-color: white;*/
		opacity: 0.85;
		height: 66px;
		width: 100%;
		font-family: 微軟正黑體;
		position: fixed;
		z-index: 999;
		.navbar-brand {
			padding-top: 20px;
			font-size: 22px;
			color: DimGray;
			font-weight: 500;
		}
		.nav-link {
			text-decoration: none;
			font-size: 18px;
			color: DimGray;
		}
		.nav-link:hover {
			color: Goldenrod;
		};

	}
</style>