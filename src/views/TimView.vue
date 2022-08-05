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
            <h2>TEAM</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          </div>
          <div class="half-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="about">
<h3>Developer</h3>
<div class="grid-container" style="display: flex; align-items: center; justify-content: center; ">
<div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
<div
  v-if="checkActiveArray(1)"
  class="item">
<div class="card">
  <img src="../assets/andika.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Andika K</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(2)"
  class="item">
<div class="card">
  <img src="../assets/arif.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Arif M</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(3)"
  class="item">
<div class="card">
  <img src="../assets/rachmat.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Rachmat F</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(4)"
  class="item">
<div class="card">
  <img src="../assets/iqbal.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>M Iqbal F</b></h4>
    <p>Java Software Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(5)"
  class="item">
<div class="card">
  <img src="../assets/leo.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Leonardo G</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(6)"
  class="item">
<div class="card">
  <img src="../assets/mardiyanto.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mardiyanto W</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(7)"
  class="item">
<div class="card">
  <img src="../assets/nur_k.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Nur K</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(8)"
  class="item">
<div class="card">
  <img src="../assets/rizki.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Rizki AP</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(9)"
  class="item">
<div class="card">
  <img src="../assets/mauli.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>S Pulung</b></h4>
    <p>Full-Stack Dev</p>
  </div>
</div>
</div>
<div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
<h3>UI/UX</h3>
<div class="grid-container">
<div class="item1">
<div class="card">
  <img src="../assets/anjas.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Anjas R</b></h4>
    <p>Lead UI/UX</p>
  </div>
</div>
</div>
<div class="item2">
<div class="card">
  <img src="../assets/fitra.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Fitra P</b></h4>
    <p>UI/UX Graphic Designer</p>
  </div>
</div>
</div>
<div class="item3">
<div class="card">
  <img src="../assets/fahri.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Fahri A</b></h4>
    <p>UI/UX Graphic Designer</p>
  </div>
</div>
</div>
</div>
<h3>Quality Assurance</h3>
<div class="grid-container" style="display: flex; align-items: center; justify-content: center; ">
<div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
<div
  v-if="checkActiveArray(1)"
  class="item">
<div class="card">
  <img src="../assets/afifa.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Afifa Mayang L</b></h4>
    <p>QA Test Analyst</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(2)"
  class="item">
<div class="card">
  <img src="../assets/abiyyu.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Abiyyu Al G</b></h4>
    <p>QA Test Analyst</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(3)"
  class="item">
<div class="card">
  <img src="../assets/barca.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Barca YS</b></h4>
    <p>QA Test Analyst</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(4)"
  class="item">
<div class="card">
  <img src="../assets/aji.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Aji F</b></h4>
    <p>QA/Security Tester</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(5)"
  class="item">
<div class="card">
  <img src="../assets/josua.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Josua S</b></h4>
    <p>QA Test Analyst</p>
  </div>
</div>
</div>
<div
  v-if="checkActiveArray(6)"
  class="item">
<div class="card">
  <img src="../assets/ageng.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Ageng F</b></h4>
    <p>QA Test Analyst</p>
  </div>
</div>
</div>
<div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
<h3>Digital Marketing</h3>
<div class="grid-container">
<div class="item">
<div class="card">
  <img src="../assets/mauli.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item">
<div class="card">
  <img src="../assets/mauli.png" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item">
<div class="card">
</div>
</div>
</div>
</div>
<div class="join_us">
  <img src="../assets/join_us.jpg" style="width: 100%; height: 366px; object-fit: cover; opacity: 75%; margin: 0;" />
  <div class="jjg">
    <div class="content-tim">
    <h2>Beragabung Bersama Kami</h2>
    <br>
    <p style="color: white; font-weight: 400;">Berminat bergabung bersama kami?</p>
    <button class="cta-tim"><router-link to="/contact" class="text-white">Hubungi Kami</router-link></button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      activeIndex: [1, 2, 3],
      totalItems: 9,
      banners: [
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
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
}
h3{
  padding-top: 96px;
  padding-bottom: 48px;
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: white;
  border-radius: 0;
  margin-bottom: 75px;
  text-align: left;
}

.container {
  padding: 2px 16px;
  border-radius: 0;
}

h4{
  color: black;
  padding-top: 12px;
  font-size: 24px;
  text-align: left;
}

p{
  padding-top: 8px;
  font-size: 16px;
  text-align: left;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 48px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.join_us{
  display: flex;
  height: 366px;
}

.jjg{
  left: 102px;
  top: 3642px;
  display: flex;
  position: absolute;
  margin: 50px;
  background: #CEA206;
  opacity: 0.8;
  width: 699px;
  height: 365px;
  transform: skew(-40deg); /* default syntax */
}
.content-tim{
  transform: skew(0deg); /* default syntax */
}
.cta-tim{
  background-color: #1F1F1F;
  opacity: 80%;
  height: 46px;
  width: 173px;
  font-size: 20px;
  padding: 8px 16px;
  margin-left:  110px;
}
</style>
