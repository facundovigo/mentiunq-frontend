<template>
  <div
    class="w-auto h-auto max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="Hacer"
          navText="Hacer Pregunta"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5"
              >question_answer</i
            >
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="Responder"
          navText="Responder"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">description</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Extras
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
        url="#"
        :aria-controls="''"
        v-bind:collapse="false"
        collapseRef="Profile"
        navText="Profile"
        >
        <template v-slot:icon>
          <i class="material-icons-round opacity-10 fs-5">person</i>
        </template>
      </sidenav-collapse>
    </li>
    <li class="nav-item">
      <sidenav-collapse
        url="#"
        :aria-controls="''"
        v-bind:collapse="false"
        collapseRef="sign-in"
        navText="Log Out"
      >
        <template v-slot:icon>
          <i class="material-icons-round opacity-10 fs-5">logout</i>
        </template>
      </sidenav-collapse>
    </li>
    </ul>
    <div v-if="this.$store.state.prueba" class="sidenav-footer position-absolute w-100 bottom-0">
      <div class="mx-3">
        <a
          href="#"
          @click="toggleSidebar"
          class="btn mt-4 w-100"
          :class="`bg-gradient-${this.$store.state.color}`"
          >Ocultar Panel</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import { mapMutations,  } from "vuex";
export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  
  components: {
    SidenavCollapse
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),

    toggleSidebar() {
      this.navbarMinimize();
    },
  },
};
</script>
