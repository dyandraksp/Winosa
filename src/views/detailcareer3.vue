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

    color: #000000;">QA Software Tester</h1>
    </div>
    <div class="content">
    <img :src="vector_career" style="width: 310px; height: 310px; margin-left: 390px;  left: 852px; margin-top: 70px; object-fit: cover;">
    </div>
    <br>
    <p></p>
    <div class="career">
    <a style="margin-top: 3px; font-family: inter, sans-serif; top: 543px;
    font-style: medium;
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    /* or 48px */

    color: #000000;">Lokasi</a>
    <br><br>
    <a style="font-family: Inter, sans-serif;
    margin-top: 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */

    color: #000000;">
      Bandar Lampung
    </a>
    <hr/>
    <a style="margin-top: 3px; font-family: inter, sans-serif; top: 543px;
    font-style: medium;
    font-weight: 500;
    font-size: 26px;
    line-height: 150%;
    /* or 48px */

    color: #000000;
    ">Tujuan Pekerjaan</a>
    <br>
    <br>
    <a style="font-family: inter, sans-serif;
    margin-top: 100px;top: 800px;height: 227px;
    width: 1182px;
    left: 126px;
    top: 735px;

    margin-right: 133px;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    width: 1080px; height: 310px;
    line-height: 150%;

    color: #000000;">
     Winosa Mitra adalah perusahaan konsultan bisnis dan pengembangan perangkat lunak yang muda dan berkembang pesat.
     Kami sedang memperluas dan mencari QA Software Tester. Anda akan bekerja dari kantor kami untuk pelanggan internasional.
     <br><br>
     Apakah Anda ingin menjadi bagian dari perusahaan paling ambisius di Indonesia kemudian bergabung dengan tim kami dan
     mempercepat karir Anda. Harap tunjukkan dalam aplikasi Anda bagaimana Anda memenuhi persyaratan di bawah ini dan ekspektasi gaji Anda.
    </a>
    <hr/>
    <a style="margin-top: 3px; font-family: inter, sans-serif; top: 543px;
    font-style: medium;
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    /* or 48px */

    color: #000000;">Persyaratan</a>
    <ul style="font-family: inter, sans-serif;
    margin-top: 20px;top: 800px;height: 227px;
    width: 1182px;
    left: 126px;
    top: 735px;

    margin-right: 133px;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    width: 1080px; height: 200px;
    line-height: 150%;">
      <li>Magang untuk jurusan IT atau paruh waktu untuk mahasiswa tahun terakhir.</li>
      <li>Memiliki minat di bidang web development</li>
      <li>Memiliki pemahaman yang baik tentang HTML dan CSS.</li>
      <li>Memiliki kemampuan bekerja dalam team</li>
      <li>Memiliki keinginan untuk belajar, adaptif dan bertanggung jawab</li>
     <li>Fasih berbahasa Inggris - keterampilan komunikasi tertulis dan lisan (setidaknya 7/10).</li>
     <li>Jujur dan bersedia bekerja di Bandar Lampung</li>
    </ul>
     <hr/>

    <a style="margin-top: 3px; font-family: inter, sans-serif; top: 543px;
    font-style: medium;
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    /* or 48px */

    color: #000000;">Persyaratan Tambahan</a>
    <ul style="font-family: inter, sans-serif;
    margin-top: 20px;top: 800px;height: 227px;
    width: 1182px;
    left: 126px;
    top: 735px;

    margin-right: 133px;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    width: 1080px; height: 200px;
    line-height: 150%;">
      <li>Terbiasa dengan pengujian penerimaan pengguna, skrip, pengujian regresi </li>
      <li>Familiar dengan alat otomatisasi seperti selenium, robot framework</li>

    </ul>
    <div class="button">
                <button style="background-color: #CEA206; width: 159px;
    height: 48px; font-size: 18px; padding: 8px 16px 16px 16px ; margin-left: 1000px; display: flex; text-align: right
    flex-direction: row;left: calc(50% - 122px/2 + 507px);
    top: 1000px; bottom:300px;align-items: flex-start; ">
                <router-link to="/formcareer" class="text-white">Kirim Lamaran</router-link></button>
              </div>
    <p></p>
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
+
