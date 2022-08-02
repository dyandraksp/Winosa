<template>
<ul>
    <li style="margin-left: 152px; margin-right: 570px;"><router-link :class="{active:rl_1}" :to="{ name: 'Home' }"> <img src="../assets/winosa.png"/></router-link></li>
    <li style="padding-top: 12px;"><router-link :class="{active:rl_2}" :to="{ name: 'About' }">ABOUT</router-link></li>
    <li style="padding-top: 12px;"><router-link :class="{active:rl_3}" :to="{ name: 'Portfolio' }">PORTFOLIO</router-link></li>
    <li style="padding-top: 12px;"><router-link :class="{active:rl_4}" :to="{ name: 'Partner' }">PARTNERS</router-link></li>
    <li style="padding-top: 12px;"><router-link :class="{active:rl_5}" :to="{ name: 'Career' }">CAREER</router-link></li>
    <li style="margin-right: 152px; padding-top: 12px;"><router-link :class="{active:rl_6}" :to="{ name: 'Contact' }">CONTACT</router-link></li>
</ul>
</template>
<script>
import { ref } from 'vue'

export default {
  props: {
    idMenu: Number
  },
  setup (props) {
    // eslint-disable-next-line camelcase
    const rl_1 = ref(false)
    // eslint-disable-next-line camelcase
    const rl_2 = ref(false)
    // eslint-disable-next-line camelcase
    const rl_3 = ref(false)
    // eslint-disable-next-line camelcase
    const rl_4 = ref(false)
    // eslint-disable-next-line camelcase
    const rl_5 = ref(false)
    // eslint-disable-next-line camelcase
    const rl_6 = ref(false)

    if (props.idMenu === 1) {
      rl_1.value = true
      rl_2.value = false
      rl_3.value = false
      rl_4.value = false
      rl_5.value = false
      rl_6.value = false
    } else if (props.idMenu === 2) {
      rl_1.value = false
      rl_2.value = true
      rl_3.value = false
      rl_4.value = false
      rl_5.value = false
      rl_6.value = false
    } else if (props.idMenu === 3) {
      rl_1.value = false
      rl_2.value = false
      rl_3.value = true
      rl_4.value = false
      rl_5.value = false
      rl_6.value = false
    } else if (props.idMenu === 4) {
      rl_1.value = false
      rl_2.value = false
      rl_3.value = false
      rl_4.value = true
      rl_5.value = false
      rl_6.value = false
    } else if (props.idMenu === 5) {
      rl_1.value = false
      rl_2.value = false
      rl_3.value = false
      rl_4.value = false
      rl_5.value = true
      rl_6.value = false
    } else if (props.idMenu === 6) {
      rl_1.value = false
      rl_2.value = false
      rl_3.value = false
      rl_4.value = false
      rl_5.value = false
      rl_6.value = true
    }

    return {
      rl_1,
      rl_2,
      rl_3,
      rl_4,
      rl_5,
      rl_6
    }
  }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1F1F1F;
    opacity: 50%;
    width: 100%;
}

li {
   float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 8px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

img{
  width: 48px;
  height: 48px;
}
</style>
