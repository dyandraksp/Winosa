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
          <div class="circle">
            <div class="header-banner">
            <h2>ABOUT US</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          <div class="half-circle"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="about">
<h3 style="text-align: left;">Kirimkan Kami CV Kalian!</h3>
</div>
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

</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      activeIndex: [1, 2, 3],
      totalItems: 5,
      banners: [
        'https://img.freepik.com/free-photo/company-representatives-reading-applicant-resume-hiring_1163-4684.jpg?w=1060&t=st=1665369098~exp=1665369698~hmac=ad6f55cb4482664533f632632ff052ccaa16f58aabba5cb02d4b68d7e8809a63'
      ]
    }
  }
}
</script>
