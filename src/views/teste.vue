<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h1>Dashboard de Monitoramento</h1>
      
      <!-- Gráfico de Tempo (Temperatura ao Longo do Dia) -->
      <div class="chart-container">
        <h2>Gráfico de Tempo (Temperatura ao Longo do Dia)</h2>
        <Line :data="timeData" :options="chartOptions" />
      </div>
      
      <!-- Gráfico de Umidade do Solo -->
      <div class="chart-container">
        <h2>Gráfico de Umidade do Solo</h2>
        <Bar :data="moistureData" :options="chartOptions" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Line, Bar } from 'vue-chartjs' // Importando os gráficos Line e Bar do vue-chartjs
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  // Registrando os componentes necessários do Chart.js
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale)
  
  // Dados para o gráfico de Tempo (Temperatura ao Longo do Dia)
  const timeData = ref({
    labels: ['10:00', '11:00', '12:00', '13:00', '14:00'], // Horários
    datasets: [
      {
        label: 'Temperatura (°C)',  // Exemplo de dado
        data: [22, 24, 27, 25, 23], // Temperaturas para cada horário
        borderColor: '#42A5F5',
        fill: false
      }
    ]
  })
  
  // Dados para o gráfico de Umidade do Solo
  const moistureData = ref({
    labels: ['08:00', '12:00', '16:00', '20:00'], // Horários do dia
    datasets: [
      {
        label: 'Umidade do Solo (%)',
        data: [60, 50, 55, 40], // Níveis de umidade para cada horário
        backgroundColor: '#FF5733'
      }
    ]
  })
  
  // Opções do gráfico (a mesma para ambos os gráficos)
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hora'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor'
        },
        min: 0
      }
    }
  })
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  
  .chart-container {
    margin: 20px;
    height: 400px; /* Limita a altura máxima do gráfico */
    width: 100%; /* Garante que os gráficos ocupem toda a largura disponível */
    max-width: 800px; /* Limita a largura máxima do gráfico */
    margin: 0 auto; /* Centraliza os gráficos horizontalmente */
  }
  
  canvas {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
  