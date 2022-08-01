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
          <img :src="banner" alt="" class="img-fluid" style="height: 570px; width: 1440px; object-fit: cover;"/>
          <div class="circle">
            <div class="header-banner">
            <h2>ABOUT US</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          <div class="btn">
            <button style="background-color: #1F1F1F; height: 43px; width: 114px; font-size: 18px; padding: 8px 16px;"><router-link to="/tim">Tim Kami</router-link></button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="about">
<h3>Developer</h3>
<div class="grid-container">
<div class="item1">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item2">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item3">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
</div>
<h3>UI/UX</h3>
<div class="grid-container">
<div class="item1">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item2">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item3">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
</div>
<h3>Quality Assurance</h3>
<div class="grid-container">
<div class="item1">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item2">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
<div class="item3">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
</div>
</div>
<h3>Digital Marketing</h3>
<div class="grid-container">
<div class="item1">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 322px; object-fit: cover;">
  <div class="container">
    <h4><b>Mauli Maro</b></h4>
    <p>Jr. Content Creator</p>
  </div>
</div>
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
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
      ],
      img_samira: [
        'https://i.pinimg.com/750x/b8/3c/e1/b83ce18dad1a797ed563a196b6b7944b.jpg'
      ]
    }
  },
  methods: {}
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
  width: 281px;
  height: 455px;
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
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
