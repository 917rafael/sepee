<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-section">
        <img src="../assets/logo1.png" alt="Logo" class="header-logo" />
        <div class="header-logo-text">Olhando para o futuro</div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li><a href="#" class="nav-link">Home</a></li>
          <li><a href="#sobre" class="nav-link">Sobre</a></li>
          <li><a href="#produtos" class="nav-link">Produtos</a></li>
          <li><a href="#contato" class="nav-link">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

.header {
  background: linear-gradient(145deg, #D5C7A1, #4CAF50); 
  color: #333; 
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}


.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-logo {
  width: 150px;
  height: auto;
  transition: transform 0.3s ease;
}

.header-logo:hover {
  transform: scale(1.1);
}

.header-logo-text {
  font-size: 24px;
  font-weight: 600;
  color: #4CAF50;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}


.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-menu ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4CAF50;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #4CAF50;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Responsive Layout */
@media (max-width: 1024px) {
  .header-container {
    flex-direction: column;
    align-items: center;
  }

  .nav-menu {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  }

  .nav-menu ul {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .nav-link {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 15px 0;
  }

  .header-logo {
    width: 120px;
  }

  .header-logo-text {
    font-size: 22px;
  }

  .nav-menu ul {
    gap: 20px;
  }

  .nav-link {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .header-logo {
    width: 100px;
  }

  .header-logo-text {
    font-size: 20px;
  }

  .nav-menu ul {
    gap: 15px;
  }

  .nav-link {
    font-size: 14px;
  }
}
</style>
