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
          <img :src="banner" alt="" class="img-fluid" style="height: 570px; width: 100%; object-fit: cover;" />
        </div>
      </div>
    </div>
  </div>
<div class="about">
<h1>Visi Perusahaan</h1>
<p>
  Menjadi salah satu perusahaan penyedia jasa konsultan dan
  pengembangan bisnis di bidang IT yang terpercaya untuk memberikan
  solusi yang inovatif dan mampu bersaing dalam skala nasional dan internasional.
</p>
<hr/>
<h1>Misi Perusahaan</h1>
<p>
  Winosa memiliki misi untuk menjaga dan meningkatkan kualitas profesionalisme.
  Winosa juga berorientasi kepada kepuasan dan keberhasilan bisnis pelanggan.
  Efektifitas efesiensi serta produktifitas dalam pendampingan dan pengembangan bisnis pelanggan.
  Winosa berkomitmen tinggi dalam setiap pendampingan dan pengembangan bisnis pelanggan.
  Menyediakan sumber daya manusia yang berkualitas sebagai pusat pengembangan dan pendampingan bisnis.
</p>
<hr/>
<h1>Sejarah Perusahaan</h1>
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
<h1>Management</h1>
</div>
</template>

<script>
export default {
  name: 'app-head',
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
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
  padding-top: 64px;
  padding-bottom: 24px;
}
p{
  padding-bottom: 64px;
}
</style>
