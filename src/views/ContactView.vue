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
  </p><!DOCTYPE html>
<html lang="en">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<div class="sidenav" >
  <h1>Hubungi Kami</h1>
 <a style="position: absolute;
width: 400px;
height: 84px;
left: 140px;
top: 380px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;

/* or 27px */

color: #000000;">Kami menyukai pertanyaan dan saran dari anda,
dan kami selalu senang membantu!<br/>
Berikut cara untuk menghubungi kami</a>

</div>
<div class="content">
<img :src="vector_contact" style="width: 610px; height: 617px; left: 732px; top: 82px; object-fit: cover;">
</div>

</body>
</html>

</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      vector_contact: [
        'https://i.pinimg.com/564x/69/4f/27/694f2711d7c4a88cc7a9d45e77633948.jpg'
      ]
    }
  },
  methods: {}
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.sidenav {
    margin-left: 0px;
  padding-left: 720px;
}

.sidenav a {
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
}

.content {
  margin-left: 750px;
  padding-left: 20px;
}
h1{
position: absolute;
width: 534px;
height: 84px;
left: 158px;
top: 280px;

font-family: Inter, sans-serif ;
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 66px;
letter-spacing: 3px;

color: #000000;
}
</style>
