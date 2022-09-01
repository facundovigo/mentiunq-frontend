<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{datos}}</h2>
    <nav class="navbar navbar-light bg-light d-inline-flex p-2 bd-highlight" >
      <div class="container-fluid">
          <button class="btn btn-outline-success" v-on:click="prueba">Slides</button> 
          <button class="btn btn-outline-primary space" v-on:click="clean">clean</button> 
      </div>
    </nav>
  </div>
</template>

<script>

import API from '../service/api';
export default {
  name: 'HelloWorld',
    components: {

  },
  props: {
    msg: String
  },
  data(){
    return{
    datos:""
    }
  },
  methods:{
    prueba(){
      API.get(`/slides/`)
       .then( resp => this.datos = resp )
        .catch(e => e)
        //this.datos="pase"
        //v-on:click
    },
    clean(){
      this.datos =""
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

.space {
  margin-left: 50px !important;
}
</style>
