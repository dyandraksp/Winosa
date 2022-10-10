<template>
<div class="">
    <div
      id="bannerportfolio"
      class="PortfolioBanner"
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
            <div class="banner-portfolio">
            <h2>PORTFOLIO</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">Kami adalah multi-budaya yang terdiri dari orang-<br/>
              orang yang antusias, bersemangat, dan <br/>
              berorientasi pada target. Kami menantikan untuk <br/>
              bekerjasama dan mendukung bisnis anda.</p>
          </div>
        </div>
    </div>
    </div>
</div>
<div class="portfolio">
  <div class="button" @click="shiftLeft()" style="margin-left: 156px;"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
  <div class="img-portfolio" style="margin-left: 110px;">
    <router-link to="/XdemiaView">
    <img src="../assets/portfolio_xdemia.png" class="xdemia">
  </router-link>
  </div>
  <div class="button" @click="shiftRight()" style="margin-left: 110px;"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
</div>
</template>
<script>
export default {
  name: 'app-head',
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    }
  },
  methods: {
    setFront () {

    },
    shiftLeft () {
      const boxes = document.querySelectorAll('.box')
      const tmpNode = boxes[0]
      boxes[0].className = 'box move-out-from-left'
      setTimeout(function () {
        if (boxes.length > 3) {
          tmpNode.classList.add('box--hide')
          boxes[3].className = 'box move-to-position1-from-left'
        }
        boxes[1].className = 'box move-to-position2-from-left'
        boxes[2].className = 'box move-to-position3-from-left'
        boxes[0].remove()
        document.querySelector('.cards__container').appendChild(tmpNode)
      }, 500)
    },
    shiftRight () {
      const boxes = document.querySelectorAll('.box')
      boxes[1].className = 'box move-out-from-right'
      setTimeout(function () {
        const noOfCards = boxes.length
        if (noOfCards > 2) {
          boxes[2].className = 'box box--hide'
        }
        const tmpNode = boxes[noOfCards - 1]
        tmpNode.classList.remove('box--hide')
        boxes[noOfCards - 1].remove()
        const parentObj = document.querySelector('.cards__container')
        parentObj.insertBefore(tmpNode, parentObj.firstChild)
        tmpNode.className = 'box move-to-position1-from-right'
        boxes[0].className = 'box move-to-position2-from-right'
        boxes[1].className = 'box move-to-position3-from-right'
      }, 500)
    }
  }
}
</script>
<style>
  .banner-portfolio{
    margin-top: 90px;
    margin-left: 110px;
    width: 803px;
    height: 461px;
    border-top-left-radius: 491px;
    border-top-right-radius: 491px;
    border-bottom: 0;
    position: absolute;
    left: -100px;
    top: 109px;
  }

  .portfolio{
    margin-top: 120px;
  }

  .img-portfolio{
    position: relative;
    left: 284px;
  }

  .xdemia{
    width: 874px;
    height: 347px;
  }
</style>
