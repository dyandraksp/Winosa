<template>
  <NavBar :idMenu="idMenu" :key="IdMenu" />
  <router-view @id-menu="setMenu($event)" />
  <TheFooter :idMenu="idMenu" :key="IdMenu" />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter
  },
  setup () {
    const idMenu = ref(1)

    function setMenu (id) {
      idMenu.value = id
    }
    return {
      setMenu,
      idMenu
    }
  }
}
</script>

<style>
#app {
  font-family: Inter, sans-serif;
  color: #5D5D5D;
}
h1{
  color: white;
  font-size: 48px;
  letter-spacing: 3px;
}
h3{
  padding-bottom: 24px;
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
}
p{
  text-align: left;
}
.body{
  margin-left: 156px;
  margin-right: 156px;
}
</style>
