<template>
  <div class="container-fluid">
    <div class="row">
      <figure>
        <img src="../assets/homeBanner.jpg" class="img-fluid">
      </figure>
      <figcaption class="bannerTextBox">
        <h1 class="bannerText">奇模<br>專業都更<br>展望未來</h1>
      </figcaption>
    </div>

    <div class="row">
      <figure class="figure introBgImgBox">
        <img src="../assets/introBgImg.jpg" class="figure-img introBgimg img-fluid">
      </figure>
      <div class="introTextBox">
        <h2 class="introTitle">奇模簡介</h2>
        <p class="introText">
          奇模成立於2006年，主要營業項目包括區域計畫、都市計畫、都市更新以及各種主題之規劃研究，以成為一個多元化經營與發展之都市計畫專業顧問公司為目標。<br>
          對於都市計畫通盤檢討及個案變更亦均涉獵極深，目前亦執行許多個案變更之案例。
        </p>
      </div>
    </div>

    <div class="row goPage d-flex justify-content-evenly">
      <div class="col-3 col-md-2">
        <router-link class="goPageLink" to="/intro">
          <img src="../assets/goIntroImg.svg" class="goPageButton img-fluid rounded-circle" alt="introduction">
          <p class="goPageText text-center">公司簡介</p>
        </router-link>
      </div>
      <div class="col-3 col-md-2">
        <router-link class="goPageLink" to="/service">  
          <img src="../assets/goServiceImg.svg" class="goPageButton img-fluid rounded-circle" alt="services">
          <p class="goPageText text-center">服務項目</p>
        </router-link>
      </div> 
      <div class="col-3 col-md-2">
        <router-link class="goPageLink" to="/projects">
          <img src="../assets/goProjectsImg.svg" class="goPageButton img-fluid rounded-circle" alt="projects">
          <p class="goPageText text-center">案例實績</p>        
        </router-link>
      </div>
    </div>

    <div class="row projectInHome align-items-center">
      <figure class="col-6 figure">
        <img src="../assets/projectInHome1.jpg" class="img-fluid">
      </figure>
      <div class="col-6">
        <h2 class="projectTitle">新北市五股區審議大會通過</h2>
        <p class="projectText">賀擬訂新北市五股區中興段777地號(原更寮段褒子寮小段73-4地號)等9筆(原5筆)土地都市更新事業計畫案  審議大會通過
            賀擬訂新北市五股區中興段777地號(原更寮段褒子寮小段73-4地號)等9筆(原5筆)土地都市更新事業計畫案  審議大會通過
            賀擬訂新北市五股區中興段777地號(原更寮段褒子寮小段73-4地號)等9筆(原5筆)土地都市更新事業計畫案  審議大會通過
        </p>
      </div>
      <div class="col-6">
        <h2 class="projectTitle">新北市五股區審議大會通過</h2>
        <p class="projectText">賀擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫案  審議大會通過
            賀擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫案 審議大會通過
            賀擬訂新北市中和區健康段954地號等7筆土地都市更新事業計畫案 審議大會通過
        </p>
      </div>
      <figure class="col-6 figure">
        <img src="../assets/projectInHome2.jpg" class="img-fluid">
      </figure>

      <ContactUs />
    </div>

  </div>
</template>

<script setup>
  import ContactUs from '../components/TheContactUs.vue'
</script>

<style scoped>
  .img-fluid {
    width: 100%;
    height: auto;
  }
  .bannerTextBox {
    position: absolute;
    padding-top: 35%;
    padding-left: 20%;
    text-indent: -5%;
    color: white;
  }
  .bannerText {
    font-size: 50px;
    letter-spacing: 5px;
    line-height: 100px;
  }

  .introBgImgBox {
    position: relative;
  }
  .introBgimg {
    filter: brightness(50%);
  }
  .introTextBox {
    position: absolute;
    width: 80%;
    padding-top: 15%;
    padding-left: 20%;
    text-align: center;
    font-family: 微軟正黑體;
    color: white;
  }
  .introText {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 3px;
  }
  .introTitle {
    font-size: 26px;
  }

  .goPage {
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .goPageLink {
    text-decoration: none;
  }
  .goPageText {
    color: DimGray;
    font-size: 25px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .goPageText:hover {
    color: Goldenrod;
  };
  .projectInHome {
    position: relative;
    padding-top: 5%;
    letter-spacing: 5px;
  }
  .projectTitle {
    border-bottom: 1px solid lightgray;
    font-size: 26px;
    padding-top: 5%;
    padding-bottom: 10px;
  }
  .projectText {
    font-size: 18px;
    letter-spacing: 3px;
    line-height: 60px;
  }
</style>

  