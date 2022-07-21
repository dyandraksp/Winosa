<template>
  <NavBar :idMenu="idMenu" :key="IdMenu" />
  <router-view @id-menu="setMenu($event)" />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
