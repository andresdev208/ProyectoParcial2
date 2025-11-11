# ProyectoParcial2
Construcción de una Aplicación Web Modularizada con Vue.js y Bootstrap 5.3
 Tienda Electrónica

Segundo Parcial — Desarrollo de Aplicaciones Web

 Descripción general del negocio y objetivo de la aplicación

La Tienda Electrónica es una aplicación web que simula el panel administrativo de una tienda virtual dedicada a la venta de productos tecnológicos.
Su objetivo es demostrar el uso de Vue.js en el desarrollo de aplicaciones web modulares, utilizando componentes reutilizables, rutas dinámicas y consumo de APIs externas.

El sistema permite a un usuario autenticarse, acceder a un dashboard administrativo y gestionar (de forma simulada) los productos de la tienda:

Listado de productos electrónicos.

Agregar nuevos productos.

Editar y eliminar productos.

Visualizar productos en formato de tabla y tarjetas.



 Implementación de la modularización

El proyecto está organizado en carpetas separadas para facilitar la lectura y el mantenimiento del código:

src/
 ├── assets/                 # Archivos estáticos (imágenes, estilos)
 ├── components/             # Componentes reutilizables
 │     ├── NavbarComponent.vue
 │     ├── SidebarComponent.vue
 │     ├── FooterComponent.vue
 │     └── ProductCardComponent.vue
 ├── router/
 │     └── index.js          # Configuración de rutas (vue-router)
 ├── views/                  # Vistas principales de la aplicación
 │     ├── LoginView.vue
 │     ├── DashboardView.vue
 │     ├── DashboardHome.vue
 │     └── ProductView.vue
 ├── App.vue                 # Componente raíz
 └── main.js                 # Punto de entrada de la app


Cada módulo cumple un propósito:

Los componentes se encargan de la interfaz visual reutilizable (navbar, sidebar, footer, tarjetas).

Las vistas contienen la lógica principal de cada pantalla.

El router define las rutas y las vistas hijas dentro del dashboard.

Ejemplo de consumo de API externa

La aplicación obtiene los productos desde la FakeStore API, una API pública gratuita:
 https://fakestoreapi.com/products

Código de ejemplo utilizado en ProductView.vue:

async getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // Solo mostrar productos electrónicos
    this.products = data.filter(p => p.category === "electronics");
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}


Los productos se listan en una tabla con Bootstrap y también en formato de tarjetas.

🔗 Ejemplo de comunicación entre componentes (Props y Eventos)

Ejemplo de uso entre ProductView.vue y ProductCardComponent.vue:

ProductView.vue

<ProductCardComponent 
  :product="item" 
  @ver-detalle="verDetalle" 
/>


ProductCardComponent.vue

<template>
  <div class="card p-2 text-center">
    <img :src="product.image" class="card-img-top" alt="Producto" />
    <div class="card-body">
      <h6>{{ product.title }}</h6>
      <p>${{ product.price }}</p>
      <button class="btn btn-sm btn-primary" @click="$emit('ver-detalle', product)">
        Ver detalles
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardComponent",
  props: {
    product: Object
  }
};
</script>


 Explicación:
El componente ProductCardComponent recibe la información del producto mediante una prop, y cuando el usuario hace clic en el botón, emite un evento personalizado (ver-detalle) hacia el componente padre (ProductView), que muestra una alerta con la información del producto.

👥 Evidencia del trabajo colaborativo

El proyecto está alojado en un repositorio de GitHub 


🧠 Tecnologías utilizadas

Vue.js 3

Vue Router

Bootstrap 5

FakeStore API


Nota final

Este proyecto fue desarrollado con fines educativos para el curso Desarrollo de Aplicaciones Web.
La autenticación y los datos de productos son de prueba.