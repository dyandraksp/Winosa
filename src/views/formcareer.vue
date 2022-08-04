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
  <h1 style="position: absolute;
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

color: #000000;">Hubungi Kami</h1>
 <a style="position: absolute;
width: 400px;
height: 84px;
left: 140px;
top: 380px;
margin-left: 2px;
font-family:  inter, sans-serif;';
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
<img :src="vector_contact" style="width: 500px; height: 500px; margin-left: 250px;  left: 852px; top: 82px; object-fit: cover;">
</div>
<br>
<br>
<a style= " text-align: left; margin-left: 160px; top: 723px; font-family: inter, sans-serif;
font-style: bold;
font-weight: 500;
font-size: 32px;
line-height: 150%;
/* or 48px */

color: #000000;
">
Kirimkan Kami Sebuah Pesan
</a>
<br>
<a style="width: 807px;
height: 42px;
left: 155px;

font-family: Inter, sans-serif ;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

text-align: left;

color: #5D5D5D; text-align: left; margin-left: 160px;"> Kirimkan saja permintaan anda dan kami akan menemukan  solusi terbaik untuk anda </a>
<br>
<br>
<form action="/action_page.php">
 <div class="grid">
  <div><label for="fname" style="text-align: left; margin-left: 152px;
height: 26px;
width: 510px;
left: 160px;
top: 846px;

font-family: Inter, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #5D5D5D;
">Nama</label><br></div>
<br>
  <div><label for="lname" style="text-align: left; margin-left: 4px; left: 200px;
right: 33.96%;
top: 780px;
bottom: 50.91%;

font-family: Inter, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #5D5D5D;
"> Email</label></div>
  <br>
  <div> <input type="text" id="fname" name="fname" value="Nama Lengkap" style=" opacity:50% ;text-align: left; margin-left: 152px;left: 110px; width: 480px; height: 48px;
right: 24px;top: 780px; bottom: 46.99%; background: #FFFFFF; border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 4px;"> </div>
<br>
 <div><input type="text" id="fname" name="fname" value="Email@example.com" style=" opacity:50% ;margin-left: 4px; text-align: left;left: 10px; width: 480px; height: 48px;
right: 24px;top: 780px; bottom: 46.99%; background: #FFFFFF; border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 4px;"> </div>
</div>
<br>
 <label for="fname" style="text-align: left; margin-left: 162px;
left: 11.04%;
right: 75.49%;
top: 100px;
bottom: 44.14%;

font-family: Inter, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #5D5D5D;
">Subject</label><br>

  <input type="text" id="fname" name="fname" value="Subject" style=" text-align: left; margin-left: 162px;left: 110px; width: 1175px; height: 48px;
right: 24px;
top: 780px;
opacity: 50%;
margin-bottom: 24px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 4px;">
 <label for="fname" style="text-align: left; margin-left: 160px;
left: 11.04%;top: 20px;
font-family: Inter, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #5D5D5D;
">Pesan</label><br>
  <input type="text" id="fname" name="fname"  style="font-family: Inter, sans-serif;
font-style: normal;
font-weight: 400; text-align: left; margin-left: 160px; width: 1175px; height: 167px;
left: 11.11%;
right: 10.56%;
top: 1036px;
bottom: 27.7%;
opacity: 50%;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 4px;line-height: 150%;">

  <div class="button">
            <button style="background-color: #CEA206;margin-left: 1210px; height: 52px;
width: 120px;
left: 1170px;
top: 1383px;
border-radius: 4px;
padding: 8px, 32px, 8px, 32px; bottom:300px;align-items: flex-start; ">
            <router-link to="/formcareer" class="text-white">Kirim</router-link></button>
          </div>
          <br>
<p></p>
<p></p>
</form>
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
.grid{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}

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
  margin-left: 600px;
  padding-left: 20px;
}
button{
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 32px;

width: 122px;
height: 52px;
left: calc(50% - 122px/2 + 507px);
top: calc(50% - 52px/2 + 466px);

background: #CEA206;
border-radius: 4px;
}
</style>
