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
        </div>
      </div>
    </div>
  </div>
  <p>
  </p>
 <input type="search" style="margin-left: 300px; box-sizing: border-box; width: 564px; height: 64px; left: 377px; top: 725px;
background: #FFFFFF;
border: 1px solid #B3B3B3;
border-radius: 4px; ;"/>
 <button style="margin-left: 37px; width: 142px; height: 64px; left: 921px; margin-top: 25px; background: #BFBFBF;
border: 1px solid #B3B3B3;
border-radius: 4px; position: relative;"> <img :src="searchButton" style="width: 24px; height: 24px; width: 24px; height: 24px; left: 948px; top: 745px;" /> cari  </button>
<p>
  </p>
  <a style="margin-left: 160px;width: 347px;
height: 44px;
left: 120px;
top: 844px;

font-family: Inter,sans-serif;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;

color: #000000;
">
    Daftar Pekerjaan
  </a>
  <p>
  </p>
  <div class="left">
<a style="margin-left: 160px; width: 1194px;
height: 60px;
left: 121px;
top: 912px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #000000;
"> Kalian diberikan kebebasan untuk mengeksplorasi, menginspirasi, dan tumbuh.
<br/>cara kerja yang fleksibel dan budaya keterbukaan, kami mendengarkan, terhubung, dan tumbuh bersama untuk membuka potensi penuh Anda.
  </a>
  </div>
  <br>
  <div class="wrapper">
  <div class="card" >
    <div class="container">
    <bodycard action="/detailcareer.vue">Senior Java and/or .NET Programmer (Developer)</bodycard>
    </div>
  </div>
</div>
<P>
</P>
<div class="wrapper">
  <div class="card" >
    <div class="container">
    <bodycard>Magang Full-Stack Developer (PHP-Java)</bodycard>
    </div>
  </div>
</div>
<p>
</p>
<div class="wrapper">
  <div class="card" >
    <div class="container">
    <bodycard>QA Software Tester</bodycard>
    </div>
  </div>
</div>
<p>
</p>
<p></p>
<h6>
Hubungi kami, kami sangat senang bertemu dengan Anda!
</h6>

</template>

<script>
export default {
  name: 'app-head',
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ],
      searchButton: [
        'https://cdn-icons-png.flaticon.com/512/54/54481.png'
      ]
    }
  },
  methods: {}
}
</script>
