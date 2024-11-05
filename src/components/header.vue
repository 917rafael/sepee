<!-- eslint-disable vue/multi-word-component-names -->
<script setup>



</script>

<template>
  <header class="header">
    <div class="logo">Logo</div>
    <div class="titulo">Semeando o Futuro</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Gráfico</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}


.titulo {
  font-size: 2rem; /* Aumente o tamanho da fonte aqui */
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

/* Estilos para telas menores */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    width: 100%;
    margin-top: 1rem;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 0.5rem 0;
  }
}
</style>

