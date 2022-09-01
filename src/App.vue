<template>
  <div id="app">
    <img  style="width:50% !important" src="./assets/Logo-UNQ-RGB.png">
    <HelloWorld style="margin-top:7% !important " msg="Bienvenidos a MENTI UNQ"/>
    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4" style="margin-top:5%">
            <p> Creado por Alumnos de la Universidad Nacional De Quilmes by 12c  ♥
            <img  style="width:5% !important" src="./assets/cactus.png">           
            </p> 
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
