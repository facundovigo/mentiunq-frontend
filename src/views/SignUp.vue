<template>
  <div class="bg-white color-background">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div
                  class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center Img-Back"
                ></div>
              </div>
              <div
                class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder t-label">Sign In Menti-UNQ</h4>
                    <p class="mb-0">
                      Enter your email and password to register
                    </p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="register">
                      <div class="mb-3">
                        <material-input
                          id="name"
                          type="text"
                          label="Name"
                          name="name"
                          size="lg"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <material-input
                          id="email"
                          type="email"
                          label="Email"
                          name="email"
                          size="lg"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <material-input
                          id="password"
                          type="password"
                          label="Password"
                          name="password"
                          size="lg"
                        />
                      </div>
                      <div class="text-center">
                        <button v-if="this.spin" class="btn btn-success btn-style " type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Loading...
                        </button>
                        <material-button
                        v-if="!this.spin"
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                          type="submit"
                            >Sign Up
                          </material-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Don't have an account?
                      <router-link
                        :to="{ name: 'SignIn' }"
                        class="text-success text-gradient font-weight-bold"
                        >Sign In</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
import API from '../service/api';
export default {
  name: "sign-up",
  components: {
    MaterialInput,
    MaterialButton,
  },
  
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  data() {
    return {
      spin: false,
      body:{
        first_name: null,
        email: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapMutations(
      ["toggleEveryDisplay", "toggleHideConfig"]
    ),
    register(submitEvent){
      
      this.body.first_name = submitEvent.target.elements.name.value,
      this.body.email = submitEvent.target.elements.email.value,
      this.body.password = submitEvent.target.elements.password.value,
      
      API.post(`/user/auth/register/`, this.body)
        .then( usr => {
          this.spin = !this.spin
          localStorage.setItem('name', usr.user.first_name)
          localStorage.setItem('email', usr.user.email)
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
  .t-label{
  font-style: oblique !important;
}
 .Img-Back {
  background-image: url('../assets/img/unq2.jpg') !important;  
  background-size: 100% 100%;
 }
 .color-background{
  background-color:beige !important;
 }
</style>