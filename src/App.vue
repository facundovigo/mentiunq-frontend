<template>
  <sidenav
  :custom_class="color"
  :class="[isRTL ? 'fixed-end' : 'fixed-start']"
  v-if="showSidenav"
  />
<main class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden" >
    <navbar
    :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : ''] "
    :color="isAbsolute ? 'text-white opacity-8' : ''"
    :minNav="navbarMinimize"
    v-if="showNavbar"
    />
  <router-view />
<!-- <footer class="bg-light text-center text-lg-start  facu"  >
  <div class="text-center p-3 f-color border-radius-xl ">
    © {{ new Date().getFullYear() }}, made with
          <i class="fa fa-quora b" aria-hidden="true" ></i> by <a class="font-weight-bold text-white font-style"
            target="_blank"
            >12c</a>
  </div>
</footer> -->
</main>

</template>

<script>
  import Sidenav from "../src/components/Sidenav";
  import Navbar from "../src/components/Navbars/Navbar.vue";
  import { mapMutations, mapState } from "vuex"

export default {
  name: "App",
  components: {
    Sidenav,
    Navbar,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    ...mapState([
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",

    ])
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";

    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];

    if (window.innerWidth > 1200) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  }
};
</script>

<style >
  .facu {
  margin-top: 13% !important;
  }
</style>