<template>
<div class="">
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
  <p>
  </p>
  <h1>
    Daftar Pekerjaan
  </h1>
  <p>
    Kalian diberikan kebebasan untuk mengeksplorasi, menginspirasi, dan tumbuh.</p>
<p> Dengan cara kerja yang fleksibel dan budaya keterbukaan, kami mendengarkan, terhubung, dan tumbuh bersama untuk membuka potensi penuh Anda.
  </p>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<div class="w3-container">

  <div class="w3-grey w3-hover-shadow w3-padding-24 w3-center" style="width: 1194px;height: 94px; left: 122px; top: 996px; background: rgba(180, 180, 180, 0.25); border-radius: 4px;">
    <p>Senior Java and/or .NET Programmer (Developer)</p>
  </div>
</div>

</body>
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
