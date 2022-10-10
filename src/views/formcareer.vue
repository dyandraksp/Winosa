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
<h3>Visi Perusahaan</h3>
<p>
  Menjadi salah satu perusahaan penyedia jasa konsultan dan
  pengembangan bisnis di bidang IT yang terpercaya untuk memberikan
  solusi yang inovatif dan mampu bersaing dalam skala nasional dan internasional.
</p>
<hr/>
<h3>Misi Perusahaan</h3>
<p>
  Winosa memiliki misi untuk menjaga dan meningkatkan kualitas profesionalisme.
  Winosa juga berorientasi kepada kepuasan dan keberhasilan bisnis pelanggan.
  Efektifitas efesiensi serta produktifitas dalam pendampingan dan pengembangan bisnis pelanggan.
  Winosa berkomitmen tinggi dalam setiap pendampingan dan pengembangan bisnis pelanggan.
  Menyediakan sumber daya manusia yang berkualitas sebagai pusat pengembangan dan pendampingan bisnis.
</p>
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
<hr/>
</div>
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
