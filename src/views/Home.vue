<template>
   <sidenav
    :custom_class="color"
    :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
  </main>  <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->

</template>

<script>
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbars/Navbar.vue";
// import Configurator from "@/examples/Configurator.vue";
// import AppFooter from "@/examples/Footer.vue";
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
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton"
    ])
  },

};
</script>
