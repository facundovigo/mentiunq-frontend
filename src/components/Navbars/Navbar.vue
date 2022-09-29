<template>
  <div class="navbar-paddingg " >
    <nav  class="navbar navbar-main navbar-expand-lg nav-color border-radius-xl " >
      <div class="px-3 py-1 container-fluid "> 
        <h2 class="pepe ">MENTI-UNQ</h2>
        <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4 " id="navbar" >
        <ul class="navbar-nav justify-content-end  d-xl-none">
          <li class="nav-item ps-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-body lh-1"
              id="iconNavbarSidenav"
              >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>
<script>

import { mapMutations, mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  props: ["minNav", "color"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),

    toggleSidebar() {
      this.navbarMinimize();
 
    },
  },
  computed: {
    ...mapState([ "isAbsolute"]),

    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
  .nav-color {
      background-color: #42424a;
  }
  .navbar-paddingg {
  padding-top: 1% !important;
  padding-right: 1% !important;
}
.pepe {
  color: chartreuse;
}
</style>