<template>
  <div class="">
    <div
      id="bannerHome"
      class="HomeBanner"
      data-ride="banner"
    >
      <div class="banner-inner" style="display: flex; flex-direction: column;">
        <div
          class="banner-item"
          v-for="(banner, idx) in banners"
          :class="{ active: idx == 0 }"
          :key="idx"
          style="display:flex;"
        >
          <img :src="banner" alt="" class="img-fluid" style="height: 570px; width: 100%; object-fit: cover;"/>
          <div class="box">
            <div class="header-banner">
            <h2 style="color: #524E4E; margin-top: 100px; letter-spacing: 0px;">REKAN BISNIS ANDA <br/>DI INDONESIA</h2>
            <h4 style="margin-left: 156px; color: #524E4E;">Apakah Anda Berminat Bisnis Dengan Kami?</h4>
          <div class="btn" style="margin-top: 62px;">
            <button style="background-color: #1F1F1F; height: 52px; width: 195px; font-size: 24px; padding: 8px 20px;">
            <router-link to="/contact" class="text-white">Hubungi Kami</router-link></button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body">
<h3>Klien Kami</h3>
<p style="text-align:center;">
  Kami sangat fokus pada pelanggan internasional.<br/>
  Kami telah membangun saluran dan pelanggan di UE, Australia, dan Selandia Baru dan saat ini kami sedang memperluas ke wilayah lain.
</p>
<div class="grid-container">
  <div class="item1">
    <img src="../assets/xdemia.png" style="width:198px; height: 90px; object-fit: fill;">
  </div>
  <div class="item2">
    <img src="../assets/tx.png" style="width:198px; height: 48px; object-fit: cover;">
  </div>
  <div class="item3">
    <img src="../assets/cw.png" style="width:198px; height: 44px; object-fit: cover;">
  </div>
  <div class="item4">
    <img src="../assets/novimix.png" style="width:198px; height: 48px; object-fit: cover;">
  </div>
</div>
<hr/>
<h3>Portfolio</h3>
<div class="grid-container" style="grid-gap: 0px;">
<div class="item1">
<p style="
width: 505px;
height: 74px;
left: 155px;
top: 1256px;
line-height: 24px;

color: #5D5D5D;">
 Xdemia percaya bahwa pendidikan dan sains harus dapat diakses oleh siapa saja di mana saja di dunia tanpa investasi yang mahal dan mahal.
</p>
<button style="width:170px; height: 40px; padding-bottom: 8px;">Selengkapnya</button>
</div>
<div class="item2">
  <img src="../assets/mockup2.png" style="width: 710px; height: 310px;"/>
</div>
</div>
<hr/>
<h3>Layanan</h3>
<div class="grid-container" style="display: flex; align-items: center; justify-content: center; grid-gap: 126px;">
  <div class="item1">
    <img :src="img5" style="width:86px; height:75px; object-fit: fill;">
     <h4 style="text-align: center;">Bussines Development</h4> <br/>
     <p>
       1. Create cultural awareness

2. Market research and introduction

3. Conducting consumer and business insights

4. Introduction to local business partners

5. Marketing campaign

6. Setting up your branch office
</p>

  </div>
  <div class="item2">
    <img :src="img6" style="width:86px; height:75px; object-fit: fill;">
     <h4 style="text-align: center;">Outsourcing</h4> <br>
     <p>
       We provide offshore services to support you in developing the next generation killer application. Whether you need test analysts, full stack, frontend or backend developers for your web or mobile applications you can partner with us to extend your local development team or fully outsource development and testing to Winosa. Either way, you will have full control over the extended team who will be part of your daily scrums. This means that on a daily basis, you are in charge of everything from work hours to the planning of sprints. During your project, we are here to take care of all the administration, so you can focus on your business.
      </p>
  </div>
  <div class="item3">
    <img :src="img7" style="width:86px; height:75px; object-fit: fill;">
     <h4 style="text-align: center;">Legal</h4> <br>
     <p>
       Once you decide to enter the Indonesian market our Legal advisors will guide you through all the necessary legal, bureaucratic and tax-office requirements. Our Legal officers offer a one-shop all-in-one service so you can focus on your business.
      </p>
  </div>
</div>
<div class="grid-container" style="grid-gap: 0px;">
<div class="item1">
  <img :src="vector" style="width: 431px; height: 431px;"/>
</div>
<div class="item2">
  <h4 style="
width: 505px;
height: 74px;
left: 155px;
top: 1256px;
line-height: 24px;
font-weight: 600;
color: black;
text-align:left;">
Apakah Anda Berminat Bisnis Dengan Kami?
</h4>
<button style="width:168px; height: 40px; padding: 8px 16px; font-size: 20px; margin-top: 14px;">Hubungi Kami</button>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      ],
      img5: [
        'https://i.pinimg.com/564x/53/ff/e4/53ffe47438ce6571cffc5b48d1548756.jpg'
      ],
      img6: [
        'https://i.pinimg.com/564x/43/08/c6/4308c628b78ac17ca291fed2a1e86180.jpg'
      ],
      img7: [
        'https://i.pinimg.com/564x/4b/62/4c/4b624c2560fce5e378f21a75269292f2.jpg'
      ],
      vector: [
        'https://i.pinimg.com/564x/a8/d5/0d/a8d50df8f29cbb8ebe4aa523796a2a15.jpg'
      ]
    }
  }
}
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 100px;
  padding: 10px;
  padding-bottom: 64px;
  border:0px;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

button{
  float: left;
  font-size: 20px;
  background-color: #CEA206;
  color: white;
  border: 0;
  border-radius: 4px;
  margin-top: 34px;
}

.box{
  position: absolute;
  width: 710px;
  height: 506px;
  left: 0px;
  top: 64px;

  background: #D6BB5B;
  opacity: 79%;
}
</style>
