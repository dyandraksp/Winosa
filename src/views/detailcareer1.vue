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
width: 400px; width: 800px;
height: 113.96px;
left: 10px;
margin-top: 170px;
margin-left: 156px;
font-family: inter, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;

color: #000000;">Senior Java and/or .Net
(Developer)</h1>
</div>
<div class="content">
<img :src="vector_career" style="width: 310px; height: 310px; margin-left: 350px;  left: 852px; margin-top: 70px; object-fit: cover;">
</div>
<br>
<p></p>
<div class="career">
<a style="margin-top: 3px; margin-left:10px; font-family: inter, sans-serif; top: 543px;
font-style: medium;
font-weight: 500;
font-size: 32px;
line-height: 150%;
/* or 48px */

color: #000000;">Lokasi</a>
<br>
<a style="font-family: Inter, sans-serif;
margin-top: 32px;
margin-left: 10px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #000000;">
  Banten, Lampung, Jakarta Raya, Bandung, Palembang, Yogyakarta, Bali, Jawa Tengah, Jawa Timur
</a>
<hr/>
<a style="margin-top: 3px; margin-left:10px; font-family: inter, sans-serif; top: 543px;
font-style: medium;
font-weight: 500;
font-size: 26px;
line-height: 150%;
/* or 48px */

color: #000000;
">Tujuan Pekerjaan</a>
<br>
<a style="font-family: Inter, sans-serif;
margin-top: 26px;
margin-left: 10px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #000000;">
 Winosa Mitra adalah perusahaan konsultan bisnis dan pengembangan perangkat lunak yang muda dan berkembang pesat.
 <br>
 <a style="font-family: Inter, sans-serif;
margin-top: 26px;
margin-left: 10px;
font-style: normal;font-weight: 400;
font-size: 20px;
line-height: 150%;
/* or 30px */

color: #000000;">Kami sedang memperluas dan mencari pengembang Java dan/atau .NET yang ambisius.</a>
 <a>Anda akan bekerja sebagian dari jarak jauh dan dari kantor kami untuk pelanggan internasional.</a>
<br>
Apakah Anda ingin menjadi bagian dari perusahaan paling ambisius di Indonesia kemudian bergabung dengan tim kami dan mempercepat karir Anda. Harap tunjukkan dalam aplikasi Anda bagaimana Anda memenuhi persyaratan di bawah ini dan ekspektasi gaji Anda.
</a>
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
  <input type="submit" value="Kirim" style="display: flex; text-align: right
flex-direction: row;
align-items: flex-start;
padding: 8px 32px;
width: 122px;
height: 52px;
left: calc(50% - 122px/2 + 507px);
top: calc(50% - 52px/2 + 466px);
margin-left: 1173px;
background: #CEA206;
border-radius: 4px;">
<p></p>
</div>
</body>
</html>

</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      vector_career: [
        'https://i.pinimg.com/564x/30/77/eb/3077eb2f7005fb6c055fe5b74f2f5de7.jpg'
      ]
    }
  },
  methods: {}
}
</script>
<style>
.career{
  margin-left: 160px;
  margin-right: 156px;
  text-align: left;
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
