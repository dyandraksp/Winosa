<template>
<div class="">
    <div
      id="bannerportfolio"
      class="PortfolioBanner"
      data-ride="banner"
    >
      <div class="banner-inner">
        <div
          class="banner-item"
          v-for="(banner, idx) in banners"
          :class="{ active: idx == 0 }"
          :key="idx"
        >
          <img :src="banner" alt="" class="img-fluid" style="height: 570px; width: 100%; object-fit: cover;" />
            <div class="banner-portfolio">
            <h2>PORTFOLIO</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          </div>
        </div>
    </div>
    </div>
</div>
<div class="portfolio">
  <div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
  <div class="img-portfolio">
    <router-link to="/tim">
    <img src="../assets/portfolio_xdemia.png" >
  </router-link>
  </div>
  <div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    }
  }
}
</script>
<style>
  .banner-portfolio{
    margin-top: 90px;
    margin-left: 110px;
    width: 803px;
    height: 461px;
    border-top-left-radius: 491px;
    border-top-right-radius: 491px;
    border-bottom: 0;
    position: absolute;
    left: -100px;
    top: 109px;
  }

  .portfolio{
    display: flex;
    margin-top: 120px;
  }

  .img-portfolio{
    position: absolute;
    display: flex;
    left: 284px;
  }
</style>
