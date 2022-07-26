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
  <h1>
    Daftar Pekerjaan
  </h1>
  <p>
    Kalian diberikan kebebasan untuk mengeksplorasi, menginspirasi, dan tumbuh.</p>
<p> Dengan cara kerja yang fleksibel dan budaya keterbukaan, kami mendengarkan, terhubung, dan tumbuh bersama untuk membuka potensi penuh Anda.
  </p>

<div class="wrapper">
  <div class="card" >
    <div class="container">
    <p>Senior Java and/or .NET Programmer (Developer)</p>
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
h1{
  padding-top: 16px;
  padding-bottom: 8px;
}
p{
  padding-bottom: 24px;
}
.card{
  width: 1194px;
  height: 94px;
  background: rgba(180, 180, 180, 0.5) ;
  border-radius: 4px;
}

.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.wrapper{
  display: flex;
  align-items: center;
}
</style>
