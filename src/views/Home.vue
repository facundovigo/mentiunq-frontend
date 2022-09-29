<template>
      <sidenav
      :custom_class="color"
      :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    v-if="showSidenav"
    />
    <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
    >
    <!-- <NavbarNoCollapse class="navbar-padding"/> -->
    <navbar
    :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : ''] "
    :color="isAbsolute ? 'text-white opacity-8' : ''"
    :minNav="navbarMinimize"
    v-if="showNavbar"
    />
    <footer class="bg-light text-center text-lg-start  facu"  >
      <div class="text-center p-3 f-color border-radius-xl ">
        © {{ new Date().getFullYear() }}, made with
              <i class="fa fa-quora b" aria-hidden="true" ></i> by <a class="font-weight-bold text-white font-style"
                target="_blank"
                >12c</a>
      </div>
      <router-view />
    </footer>
  </main>

</template>

<script>
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbars/Navbar.vue";


import { mapMutations, mapState } from "vuex"


export default {
  name: "Home",
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

};
</script>

<style >

.f-color {
  background-color: #42424a;

}
</style>
