<template>
  <div class="">
    <div
      id="bannerAbout"
      class="AboutBanner"
      data-ride="banner"
    >
      <div class="banner-inner">
        <div
          class="banner-item"
          v-for="(banner, idx) in banners"
          :class="{ active: idx == 0 }"
          :key="idx"
        >
          <img :src="banner" alt="" class="img-fluid" style="height: 570px; width: 100%; object-fit: cover;"/>
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
<h3>Management</h3>
<div class="card">
  <img :src="img_samira" style="width:281px; height: 259px; object-fit: cover;">
  <div class="container">
    <h4><b>Samira Kamal</b></h4>
    <p style="font-size: 16px; padding-left: ; padding-right: ;">Business development, Food and Beverage
     <br/>Languages: Indonesian, English and Dutch</p>
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
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      ],
      img_samira: [
        'https://i.pinimg.com/750x/b8/3c/e1/b83ce18dad1a797ed563a196b6b7944b.jpg'
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
  text-align: center;
}
h3{
  padding-top: 64px;
  padding-bottom: 24px;
  color: black;
  font-size: 32px;
  font-weight: 600;
}
p{
  padding-bottom: 64px;
  font-size: 20px;
  text-align: left;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: white;
  transition: 0.3s;
  width: 281px;
  height: 455px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

h4{
  color: black;
  padding-top: 24px;
  font-size: 24px;
}
</style>
