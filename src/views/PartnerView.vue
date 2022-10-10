<template>
<div>
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
            <h2>PARTNERS</h2>
            <p style="color:white; margin-left: 156px; font-size: 20px; font-weight: 480;">
             Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
             elit. Sed nibh purus, dapibus in semper nec, venenatis <br/>
             vel elit. Nam id sem tristique lorem porttitor faucibus <br/>
             at id dolor.</p>
          </div>
          <div class="half-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3>Ulasan Klien</h3>
  <div class="qwerty">
    <div class="button" @click="shiftLeft()"><img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></div>
  <div class="container" style="margin-bottom: 262px; margin-top: 48px;">
    <div class="cards-wrapper">
        <ul class="cards__container">
            <li class="box box--hide">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box box--hide">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box box--hide">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
            <li class="box box--hide">
              <div class="cardd">
                <div class="client">
                  <img :src="img_samira" class="img-client">
                </div>
              <div class="container-cardd">
                <h4 style="text-align: center;"><b>Nama Klien</b></h4>
                <p style="font-size: 16px; text-align: left; margin: 40px 28px;">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nibh purus, dapibus in semper nec, venenatis vel elit.
                Nam id sem tristique lorem porttitor faucibus at id dolor.</p>
              </div>
            </div>
            </li>
        </ul>
    </div>
  </div>
  <div class="button" @click="shiftRight()"><img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></div>
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
          boxes[3].className = 'box move-to-position2-from-left'
        }
        boxes[1].className = 'box move-to-position1-from-left'
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

.cardd {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: white;
  transition: 0.3s;
  width: 462px;
  height: 556px;
  border-radius: 0;
  padding-top: 40px;
}

.container-cardd{
  padding: 2px 16px;
  border-radius: 0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  border-radius: 0;
  justify-content: space-around;
  align-items: center;
}

h4{
  color: black;
  padding-top: 24px;
  font-size: 24px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 48px;
  padding: 10px;
}
.client{
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-client{
  width:180px;
  height: 183px;
  object-fit: cover;
  border-radius: 100%;
  border: 3px;
  border-color: #CEA206;
}
.header-banner{
  top: 300px;
}

.button {
    margin-left: 0 3%;
    width: 2rem;
    cursor: pointer;
}

.button--inactive {
    opacity: 0.2;
}

.button img {
    width: 60%;
}

.cards-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cards__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25rem;
}

.box {
/*     margin: -1.5rem; */
    width: 462px;
    height: 556px;
    box-shadow: 0px 0px 2rem 0px #888888;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* transition: 1s all; */
}

.qwerty{
  display: flex;
  margin-top: 48px;
}

.box:nth-child(2n) {
    transform: scale(0.85);
    z-index: -1;
}

.box:nth-child(2) {
  left: 5%;
}

.box:nth-child(4) {
  left: -5%;
}

.box:nth-child(4n + 1) {
    transform: scale(0.75);
    z-index: -2;
}

.box:nth-child(1) {
  left: 15%;
}

.box:nth-child(5) {
  left: -15%;
}

.card__text-content {
    text-align: center;
    width: 75%;
}

.card__title {
    padding: 1rem;
}

.box--hide {
    display: none;
}

.move-out-from-left {
    animation: moveOutLeft 0.5s ease-in-out;
}

.move-out-from-right {
    animation: moveOutRight 0.5s ease-in-out;
}

.move-to-position3-from-left {
    animation: moveToP3Left 0.5s ease-in-out;
}

.move-to-position2-from-left {
    animation: moveToP2Left 0.5s ease-in-out;
}

.move-to-position1-from-left{
    animation: moveToP1Left 0.5s ease-in-out;
}

.move-to-position3-from-right{
    animation: moveToP3Right 0.5s ease-in-out;
}
.move-to-position2-from-right{
    animation: moveToP2Right 0.5s ease-in-out;
}
.move-to-position1-from-right{
    animation: moveToP1Right 0.5s ease-in-out;
}

@keyframes moveOutLeft {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(-150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}

@keyframes moveOutRight {
    0% {
        transform: scale(0.75) translateX(0%);
        opacity: 1;
    }
    50% {
        transform: scale(0.5) translateX(150%);
        opacity: 0.5;
    }
    100% {
        transform: scale(0.25) translateX(0%);
        opacity: 0;
    }
}

@keyframes moveToP3Left {
    from {
        transform: scale(0.85) translateX(100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

@keyframes moveToP2Left {
    from {
        transform: scale(1) translateX(100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP1Left {
    from {
        transform: scale(0.85) translateX(100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP1Right {
    from {
        transform: scale(0.75) translateX(-100%);
    }
    to {
        transform: scale(0.75) translateX(0);
    }
}

@keyframes moveToP2Right {
    from {
        transform: scale(0.75) translateX(-100%);
    }
    to {
        transform: scale(0.85) translateX(0);
    }
}

@keyframes moveToP3Right {
    from {
        transform: scale(0.85) translateX(-100%);
    }
    to {
        transform: scale(1) translateX(0);
    }
}

</style>
