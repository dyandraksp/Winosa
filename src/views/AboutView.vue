<template>
  <div class="">
    <div
      id="bannerAbout"
      class="AboutBanner"
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
          <div class="circle">
            <div class="header-banner">
            <h2>ABOUT US</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          <div class="btn">
            <button class="cta-about"><router-link to="/tim" class="text-white">Tim Kami</router-link></button>
          </div>
          <div class="half-circle"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="about">
<h3>Visi Perusahaan</h3>
<p>
  Menjadi salah satu perusahaan penyedia jasa konsultan dan
  pengembangan bisnis di bidang IT yang terpercaya untuk memberikan
  solusi yang inovatif dan mampu bersaing dalam skala nasional dan internasional.
</p>
<hr/>
<h3>Misi Perusahaan</h3>
<p>
  Winosa memiliki misi untuk menjaga dan meningkatkan kualitas profesionalisme.
  Winosa juga berorientasi kepada kepuasan dan keberhasilan bisnis pelanggan.
  Efektifitas efesiensi serta produktifitas dalam pendampingan dan pengembangan bisnis pelanggan.
  Winosa berkomitmen tinggi dalam setiap pendampingan dan pengembangan bisnis pelanggan.
  Menyediakan sumber daya manusia yang berkualitas sebagai pusat pengembangan dan pendampingan bisnis.
</p>
<hr/>
<h3>Sejarah Perusahaan</h3>
<p>
  PT Winosa Bharatadjaya didirikan pada tahun 2020 sebagai konsultan bisnis
  dan pengembangan perangkat lunak yang berada di Bandar Lampung.
  Kami telah membangun koneksi internasional di Belanda, Australia dan
  Selandia Baru dan saat ini kami sedang memperluas ke wilayah lain.
  PT Winosa Mitra Bharatadjaya memiliki sumber daya manusia di bidang IT,
  bisnis dan legal, yaitu tim penguji, tim pengembang software, tim design
  beserta tim pendukung pengembangan bisnis untuk pemenuhan permintaan bisnis.
</p>
<hr/>
<h3>Management</h3>
<div class="grid-container" style="display: flex; align-items: center; justify-content: center; ">
<div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
<div
  v-if="checkActiveArray(1)"
  class="item">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4 style="text-align: center;"><b>Samira Kamal<br/>(Director)</b></h4>
    <p style="font-size: 16px; text-align: center;">Business development, Food and Beverage
     <br/>Languages: Indonesian, English and Dutch</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(2)"
  class="item">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4 style="text-align: center;"><b>Ina Sundari <br/>(Director)</b></h4>
    <p style="font-size: 16px; text-align: center;">Business development, Real estate
    <br/>Languages: Indonesian and English</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(3)"
  class="item">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4 style="text-align: center;"><b>Billy Bharatadjaya <br/> (General Manager) </b></h4>
    <p style="font-size: 16px; text-align: center;">Business development, Strategic alliances
    <br/> Indonesian, Dutch and English</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(4)"
  class="item">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4 style="text-align: center;"><b>Muhammad Reza<br/> (Business Consultant) </b></h4>
    <p style="font-size: 16px; text-align: center;">Business development, Computer science
    <br/> Languages: Indonesian and English</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(5)"
  class="item">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4 style="text-align: center;"><b>Ariananda Desmaria<br/> (Program Manager) </b></h4>
    <p style="font-size: 16px; text-align: center;">HR, Market entry
    <br/> Languages: Indonesian and English</p>
  </div>
</div>
</div>
<div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
</div>
</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      activeIndex: [1, 2, 3],
      totalItems: 5,
      banners: [
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      ],
      img_samira: [
        'https://i.pinimg.com/750x/b8/3c/e1/b83ce18dad1a797ed563a196b6b7944b.jpg'
      ]
    }
  },
  computed: {
  },
  methods: {
    shiftLeft () {
      if (this.activeIndex[0] !== 1) {
        this.activeIndex[2] = this.activeIndex[1]
        this.activeIndex[1] = this.activeIndex[0]
        this.activeIndex[0] = this.activeIndex[0] - 1
      }
    },
    shiftRight () {
      if (this.activeIndex[2] !== this.totalItems) {
        this.activeIndex.push(this.activeIndex[2] + 1)
        this.activeIndex.splice(0, 1)
      }
    },
    checkActiveArray (index) {
      return this.activeIndex.includes(index)
    }
  }
}
</script>
<style>
.about{
  margin-left: 156px;
  margin-right: 156px;
  text-align: center;
}
h3{
  padding-top: 64px;
  padding-bottom: 24px;
  color: black;
  font-size: 32px;
  font-weight: 600;
}
p{
  padding-bottom: 64px;
  font-size: 20px;
  text-align: left;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: white;
  transition: 0.3s;
  width: 281px;
  height: 455px;
  border-radius: 0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  border-radius: 0;
}

h4{
  color: black;
  padding-top: 24px;
  font-size: 24px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 48px;
  padding: 10px;
}
.btn{
  display:flex;
  position:absolute;
  left: 150px;
  padding: 0px;
  top: 200px;
  bottom: 78.97%;
  margin-top: 100px;
}
.cta-about{
  background-color: #1F1F1F;
  opacity: 80%;
  height: 43px;
  width: 114px;
  font-size: 18px;
  padding: 8px 16px;
  margin-left:  110px;
}
.cta-about:hover{
  background-color: #1F1F1F;
}
.circle{
  width: 803px;
  height: 461px;
  border-top-left-radius: 491px;
  border-top-right-radius: 491px;
  border-bottom: 0;
  position: absolute;
  left: -100px;
  top: 109px;

  background: #CEA204;
}

.half-circle{
  width: 279px;
  height: 139px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border-bottom: 0;
  position: absolute;
  left: 603px;
  top: 330px;

  background: #FFFFFF;
  opacity: 73%;
}

.header-banner{
  margin-top: 90px;
  margin-left: 110px;
}

.button {
    margin-left: 0 3%;
    width: 2rem;
    cursor: pointer;
}

.button--inactive {
    opacity: 0.2;
}

.button img {
    width: 60%;
}

.cards-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cards__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25rem;
}

.card__text-content {
    text-align: center;
    width: 75%;
}

.card__title {
    padding: 1rem;
}

.box--hide {
    display: none;
}

.move-out-from-left {
    animation: moveOutLeft 0.5s ease-in-out;
}

.move-out-from-right {
    animation: moveOutRight 0.5s ease-in-out;
}

.move-to-position5-from-left {
    animation: moveToP5Left 0.5s ease-in-out;
}

.move-to-position4-from-left {
    animation: moveToP4Left 0.5s ease-in-out;
}

.move-to-position3-from-left {
    animation: moveToP3Left 0.5s ease-in-out;
}

.move-to-position2-from-left {
    animation: moveToP2Left 0.5s ease-in-out;
}

.move-to-position1-from-left{
    animation: moveToP1Left 0.5s ease-in-out;
}

.move-to-position5-from-right{
    animation: moveToP5Right 0.5s ease-in-out;
}
.move-to-position4-from-right{
    animation: moveToP4Right 0.5s ease-in-out;
}
.move-to-position3-from-right{
    animation: moveToP3Right 0.5s ease-in-out;
}
.move-to-position2-from-right{
    animation: moveToP2Right 0.5s ease-in-out;
}
.move-to-position1-from-right{
    animation: moveToP1Right 0.5s ease-in-out;
}

@keyframes moveOutLeft {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(-150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}

@keyframes moveOutRight {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}

@keyframes moveToP5Left {
    from {
        transform: scale(0.75) translateX(100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP4Left {
    from {
        transform: scale(0.75) translateX(100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP3Left {
    from {
        transform: scale(0.85) translateX(100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

@keyframes moveToP2Left {
    from {
        transform: scale(1) translateX(100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP1Left {
    from {
        transform: scale(0.85) translateX(100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP1Right {
    from {
        transform: scale(0.75) translateX(-100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP2Right {
    from {
        transform: scale(0.75) translateX(-100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP3Right {
    from {
        transform: scale(0.85) translateX(-100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

@keyframes moveToP4Right {
    from {
        transform: scale(1) translateX(-100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP5Right {
    from {
        transform: scale(0.85) translateX(-100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}
</style>
