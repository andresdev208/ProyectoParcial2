<template>
  <nav class="navbar navbar-light bg-light shadow-sm px-3">
    <span class="navbar-brand mb-0 h5">Panel de Administración</span>
    <span>Usuario: {{ usuarioActivo }}</span>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      usuarioActivo: localStorage.getItem("usuarioActivo") || "Invitado"
    }
  }
}
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
