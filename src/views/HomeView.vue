<template>
<div class="">
    <div
      id="bannerHome"
      class="HomeBanner"
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
  <img :src="mockup" style="width: 640px; height: 413px;"/>
</div>
</div>
<hr/>
<h3>Layanan</h3>
<div class="grid-container">
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
  margin-top: 155px;
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
      img4: [
        'data:image/png;base64,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'
      ],
      img3: [
        'https://i.pinimg.com/564x/fc/b5/3f/fcb53f4fb478d0cb9bac7792688f511a.jpg'
      ],
      img2: [
        'https://i.pinimg.com/564x/af/38/c1/af38c19237dd25f4c2c63bdb62079bba.jpg'
      ],
      img1: [
        'https://i.pinimg.com/564x/3a/71/4e/3a714ea54753ac2b917e6b25a10771c2.jpg'
      ],
      mockup: [
        'https://i.pinimg.com/564x/24/54/e2/2454e28dc8d6f7c1ab19ffc2ef1cd8bc.jpg'
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
</style>
