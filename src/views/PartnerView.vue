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
            <h2>PARTNERS</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
             elit. Sed nibh purus, dapibus in semper nec, venenatis <br/>
             vel elit. Nam id sem tristique lorem porttitor faucibus <br/>
             at id dolor.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3>Ulasan Klien</h3>
<div class="grid-container" style="display: flex; align-items: center; justify-content: center; ">
<div class="item1">
<div class="cardd">
  <img :src="img_samira" style="width:180px; height: 183px; object-fit: cover; border-radius: 100%; border: 3px; border-color: #CEA206;">
  <div class="container">
    <h4 style="text-align: center;"><b>Nama Klien</b></h4>
    <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
    Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
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
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
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
.cardd {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: white;
  transition: 0.3s;
  width: 462px;
  height: 556px;
  border-radius: 0;
  padding-top: 40px;
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
.circle{
  position: absolute;
  width: 744.25px;
  height: 481px;
  left: 0px;
  top: 89px;
  border-radius: 100% 100% 0px 0px;

  background: #CEA206;
}
.header-banner{
  top: 300px;
}
</style>
