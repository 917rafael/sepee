<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { ref, onMounted } from 'vue';
import { Line, Bar } from 'vue-chartjs'; // Importando os gráficos Line e Bar do vue-chartjs
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { supabase } from '../lib/supabaseClient';
// Registrando os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale);


// Dados de gráficos
const timeData = ref({
  labels: [],
  datasets: [
    {
      label: 'Temperatura (°C)', 
      data: [], 
      borderColor: '#42A5F5',
      fill: false,
    },
  ],
});

const moistureData = ref({
  labels: [],
  datasets: [
    {
      label: 'Umidade do Solo (%)',
      data: [],
      backgroundColor: '#FF5733',
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Hora',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Valor',
      },
      min: 0,
    },
  },
});

// Função para buscar dados do Supabase
const fetchSensorData = async () => {
  try {
    // Buscar os dados da tabela 'sensor_data' no Supabase
    const { data, error } = await supabase
      .from('umidade')
      .select('umidade, created_at')
      .order('created_at', { ascending: true });

    if (error) throw error;

    // Atualizar os dados do gráfico com os dados obtidos do Supabase
    const labels = data.map(item => new Date(item.created_at).toLocaleTimeString());
    const moisture = data.map(item => item.umidade);

    moistureData.value.labels = labels;
    moistureData.value.datasets[0].data = moisture;

    // Para o gráfico de tempo (se desejar adicionar temperatura ou outras métricas)
    timeData.value.labels = labels; // Pode ser ajustado conforme as necessidades de tempo
    timeData.value.datasets[0].data = moisture; // Aqui, você pode atualizar com dados de temperatura

  } catch (error) {
    console.error('Erro ao buscar dados do Supabase:', error);
  }
};

// Buscar dados assim que o componente for montado
onMounted(() => {
  fetchSensorData();
});
</script>

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
