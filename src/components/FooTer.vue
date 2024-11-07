<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo Section -->
      <div class="footer-section logo-section">
        <img src="../assets/logo1.png" alt="Logo" class="footer-logo" />
        <div class="footer-logo-text">Olhando para o futuro</div>
      </div>
      <!-- About Section -->
      <div class="footer-section about-section">
        <h4>Sobre Nós</h4>
        <p>
          Somos uma empresa comprometida com a sustentabilidade, oferecendo soluções inovadoras para
          o cuidado e manutenção de plantas, promovendo um futuro mais verde.
        </p>
      </div>
      <!-- Contact Section -->
      <div class="footer-section contact-section">
        <h4>Contato</h4>
        <p><i class="fas fa-map-marker-alt"></i> 121 Colégio Agrícola, SC 92103-9000</p>
        <p><i class="fas fa-phone"></i> (123) 456-7890</p>
        <p><i class="fas fa-envelope"></i> contato@agricolaexemplo.com</p>
      </div>
      <!-- Hours Section -->

      <!-- Social Section -->
      <div class="footer-section social-section">
        <h4>Siga-nos</h4>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© 2024 Projeto Semeando o Futuro. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
/* General Footer Styles */
.footer {
  background: linear-gradient(145deg, #d5c7a1, #4caf50); /* Bege e verde moderno */
  color: #333; /* Cor de texto escura para contraste */
  padding: 80px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  transition:
    background 0.3s ease,
    padding 0.3s ease;
}

/* Container Flex Layout */
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  gap: 35px;
}

/* Footer Section Styling */
.footer-section {
  flex: 1 1 240px;
  min-width: 240px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin-bottom: 30px;
  position: relative;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Hover Effect for Sections */
.footer-section:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

/* Logo Section Styling */
.logo-section {
  text-align: center;
  margin-bottom: 30px;
}

.logo-section .footer-logo {
  width: 200px;
  height: auto;
  margin-bottom: 15px;
  transition:
    transform 0.4s ease,
    filter 0.3s ease;
}

.logo-section:hover .footer-logo {
  transform: scale(1.15);
  filter: brightness(1.2);
}

/* Logo Text Styling */
.footer-logo-text {
  font-size: 32px;
  font-weight: 600;
  color: #4caf50;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.logo-section:hover .footer-logo-text {
  color: #d5c7a1;
  transform: translateY(-5px);
}

/* Section Titles Styling */
.footer-section h4 {
  font-size: 26px;
  font-weight: 700;
  color: #4caf50;
  margin-bottom: 20px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #4caf50;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-section:hover h4::after {
  opacity: 1;
}

/* Paragraph Text Styling */
.footer-section p {
  margin: 12px 0;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  font-weight: 400;
}

/* Icon Styling */
.footer-section p i {
  margin-right: 8px;
  font-size: 20px;
  color: #4caf50;
}

/* Social Icons Section */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
}

.social-icons .social-icon {
  color: #4caf50;
  font-size: 32px;
  border: 3px solid #4caf50;
  border-radius: 700px;
  padding: 16px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.social-icons .social-icon:hover {
  background-color: #4caf50;
  color: #fff;
  transform: scale(1.15);
  animation: bounce 1s ease-in-out;
}

/* Footer Bottom Styling */
.footer-bottom {
  text-align: center;
  background-color: #4caf50;
  padding: 20px 0;
  font-size: 14px;
  color: #f5f5dc;
  margin-top: 40px;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.15);
}

.footer-bottom p {
  font-size: 16px;
  color: #f5f5dc;
}

/* Animations */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
}

/* Responsive Layout */
@media (max-width: 1024px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    margin: 20px 0;
    text-align: center;
  }

  .footer-section h4 {
    font-size: 20px;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0;
  }

  .footer-section {
    padding: 15px;
  }

  .footer-bottom {
    font-size: 13px;
  }

  .social-icons .social-icon {
    font-size: 28px;
    padding: 18px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    width: 180px;
  }

  .footer-logo-text {
    font-size: 26px;
  }

  .footer-section h4 {
    font-size: 18px;
  }

  .footer-section p {
    font-size: 14px;
  }

  .footer-bottom {
    padding: 15px 0;
  }

  .social-icons .social-icon {
    padding: 14px;
  }
}

/* Box Shadows */
.footer-section {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.footer-section:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Additional Style Refinements */
.footer {
  box-sizing: border-box;
  border-top: 5px solid #d5c7a1;
}

.footer-container {
  box-sizing: border-box;
  padding: 0 50px;
}

/* Spacing and Padding Adjustments */
.footer-section {
  padding: 25px;
}

.footer-bottom {
  padding: 25px 0;
}

.footer-logo-text {
  font-size: 30px;
}

@media (max-width: 480px) {
  .footer-logo-text {
    font-size: 24px;
  }
}
</style>
