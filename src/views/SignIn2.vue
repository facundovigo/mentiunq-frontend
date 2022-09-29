<template>
  <div class="page-header align-items-start min-vh-100 pepe" >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0 t-label">
                  Sign in Menti Unq
                </h4>
                <div class="row mt-3">
                </div>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="mb-3">
                  <material-input
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                  />
                </div>
                <material-switch id="rememberMe" name="rememberMe"
                  >¿Pregunta/Preguntador?</material-switch
                >
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
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
              <i class="fa fa-quora b" aria-hidden="true" ></i> by <a class="font-weight-bold text-white font-style"
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
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";


export default {
  name: "sign-in",
  components: {
    MaterialInput,
    MaterialSwitch,
    MaterialButton,
  },
};
</script>
<style scoped>
.b {
color: brown !important;
}
.font-style {
  color: green !important;
}
.t-label{
  font-style: oblique !important;
}
.pepe {
  background-image: url('../../src/assets/img/UNQ.jpg'); ;
}
</style>