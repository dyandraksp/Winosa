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