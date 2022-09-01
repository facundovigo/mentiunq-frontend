<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{datos}}</h2>
    <p>
      Creado por Alumnos de la Universidad Nacional De Quilmes
    </p>

  </div>
</template>

<script>
import API from '../service/api';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    datos:"hola"
    }
  },
  methods:{
    prueba(){
      API.get(`/slides/`)
       .then( resp => this.datos = resp )
        .catch(e => e)
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
