<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Contenedor principal -->
    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <SidebarComponent @cerrar-sesion="cerrarSesion" />

      <!-- Contenido principal -->
      <div class="flex-grow-1 bg-light">
        <NavbarComponent />
        <div class="container-fluid p-4">
          <router-view />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "DashboardView",
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem("usuarioActivo");
      this.$router.push("/login");
    }
  }
};
</script>
