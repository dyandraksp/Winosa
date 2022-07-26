<template>
<div class="" style="align-items: center;">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(banner, idx) in banners"
          :class="{ active: idx == 0 }"
          :key="idx"
        >
          <img :src="banner" alt="" class="img-fluid" style="width: 100%; height: 570px; object-fit: cover; " />
        </div>
      </div>
    </div>
  </div>
  <p>
  </p>
 <input type="search" style="box-sizing: border-box; width: 564px; height: 64px; left: 377px; top: 725px;

background: #FFFFFF;
border: 1px solid #B3B3B3;
border-radius: 4px; ;"/>
 <button style="width: 142px; height: 64px; left: 921px; top: 725px; background: #BFBFBF;
border: 1px solid #B3B3B3;
border-radius: 4px; "> <img :src="searchButton" style="width: 24px; height: 24px; width: 24px; height: 24px; left: 948px; top: 745px;" /> cari  </button>
<p>
  </p>
  <h4>
    Daftar Pekerjaan
  </h4>
  <p>
  </p>
  <div class="left">
<a> Kalian diberikan kebebasan untuk mengeksplorasi, menginspirasi, dan tumbuh.</a>

 <a> cara kerja yang fleksibel dan budaya keterbukaan, kami mendengarkan, terhubung, dan tumbuh bersama untuk membuka potensi penuh Anda.
  </a>
  </div>
<div class="wrapper">
  <div class="card" >
    <div class="container">
    <bodycard>Senior Java and/or .NET Programmer (Developer)</bodycard>
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
<style>
.about{
  margin-left: 156px;
  margin-right: 156px;
}
h4{
width: 600px;
height: 44px;
left: 1150px;
top: 844px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;
align-items: center;
color: #000000;
}
.text{
width: 250px;
height: 60px;
left: 2000px;
top: 912px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #000000;

}
.bodycard{
  width: 810px;
height: 42px;
left: 148px;
top: 1022px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 150%;
/* or 48px */

color: #000000;
}
.left    { text-align: left;}
   .right   { text-align: right;}
   .center  { text-align: center;}
   .justify { text-align: justify;}

p{
  padding-bottom: 24px;
}
a{
  text-align: left;
  padding-bottom: 24px;

width: 600px;
height: 44px;
left: 1150px;
top: 844px;
}
.card{
  width: 1194px;
  height: 82px;
  left: 150px;

  background: rgba(180, 180, 180, 0.5) ;
  border-radius: 4px;
}

.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  width: 1194px;
height: 82px;
}
h6{
width: 1220px;
height: 38px;
left: 122px;
top: 1390px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;

color: #000000;

}
.wrapper{
  display: flex;
  align-items: center;
}
</style>
