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
<div class="item1">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4><b>Samira Kamal<br/>(Director)</b></h4>
    <p style="font-size: 16px; padding-left: ; padding-right: ; text-align: center;">Business development, Food and Beverage
     <br/>Languages: Indonesian, English and Dutch</p>
  </div>
</div>
</div>
<div class="item2">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4><b>Ina Sundari <br/>(Director)</b></h4>
    <p style="font-size: 16px; padding-left: ; padding-right: ; text-align: center;">Business development, Real estate
    <br/>Languages: Indonesian and English</p>
  </div>
</div>
</div>
<div class="item3">
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4><b>Billy Bharatadjaya <br/> (General Manager) </b></h4>
    <p style="font-size: 16px; padding-left: ; padding-right: ; text-align: center;">Business development, Strategic alliances
    <br/> Indonesian, Dutch and English</p>
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
  text-align: center;
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
