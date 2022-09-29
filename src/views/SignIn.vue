<template>
  <div
    class="page-header align-items-start min-vh-100 pepe"  
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sign in Menti Unq
                </h4>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="login">
                <div class="mb-3">
                  <material-input
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    class="form-control"
                  />
                </div>
                <div class="text-center ">
                  <button v-if="this.spin" class="btn btn-success btn-style " type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                  <material-button v-if="!this.spin"
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    type="submit"
                    >Sign in</material-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  Don't have an account?
                  <router-link
                    :to="{ name: 'SignUp' }"
                    class="text-success text-gradient font-weight-bold"
                    >Sign up</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, made with
              <i class="fa fa-quora b" aria-hidden="true" style="color: red" ></i> by <a class="font-weight-bold text-white font-style"
                target="_blank"
                >12c</a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { mapMutations } from "vuex";
import API from '../service/api';

export default {
  name: "sign-in",
  components: {
    MaterialInput,
    MaterialButton,
  },
  data() {
    return {
      spin: false,
      body:{
        username: null,
        password: null,
      }
    }
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login(submitEvent){
      this.body.username = submitEvent.target.elements.email.value
      this.body.password = submitEvent.target.elements.password.value
      console.log(this.body)
      API.post(`/user/auth/login/`, this.body)
        .then( usr => {
          this.spin = !this.spin
          localStorage.setItem('email', usr.user.email)
          localStorage.setItem('name', usr.user.first_name)
          this.$router.push('Responder')


        })
        .catch(e => alert(e),this.spin = !this.spin)  
    }
  },

};
</script>

<style scoped>
.btn-style{
  width: 22rem !important ;
}
.pepe {
  background-image: url('../../src/assets/img/UNQ.jpg'); ;
}
</style>
