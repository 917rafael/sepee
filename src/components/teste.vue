<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, computed } from 'vue';
// import { Line } from 'vue-chartjs'; // Importando o gráfico Line do vue-chartjs
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, TimeScale } from 'chart.js'; // Importando as escalas necessárias
import 'chartjs-adapter-luxon'; // Importando o adaptador luxon

import { supabase } from '../lib/supabaseClient';

/*~~~~~~~~~~~~--------------tabelaaaa------------------~~~~~~~~*/


// Dados do sensor
const humidityData = ref([]);
const sortColumn = ref('time');
const sortOrder = ref(true); // True para ascendente, false para descendente

// Função para buscar dados do Supabase
const fetchHumidityData = async () => {
  const { data, error } = await supabase
    .from('umidade')
    .select('umidade, time, dispositivo, sensor')
    .order(sortColumn.value, { ascending: sortOrder.value });

  if (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
  humidityData.value = data;
};

// Função para ordenar os dados
const sortData = (column) => {
  if (sortColumn.value === column) {
    sortOrder.value = !sortOrder.value; // Inverte a ordem
  } else {
    sortColumn.value = column; // Muda a coluna
    sortOrder.value = true; // Reseta a ordem para ascendente
  }
  fetchHumidityData(); // Recarrega os dados com a nova ordem
};

// Computed para ordenar os dados
const sortedData = computed(() => {
  return [...humidityData.value].sort((a, b) => {
    const columnA = a[sortColumn.value];
    const columnB = b[sortColumn.value];
    if (columnA < columnB) return sortOrder.value ? -1 : 1;
    if (columnA > columnB) return sortOrder.value ? 1 : -1;
    return 0;
  });
});

// Carregar dados ao montar o componente
onMounted(() => {
  fetchHumidityData();
});

</script>

<template>
  <div class="table-container">
    <h1>Dados de Umidade</h1>

    <table>
      <thead>
        <tr>
          <th @click="sortData('umidade')">Umidade</th>
          <th @click="sortData('time')">Hora</th>
          <th @click="sortData('dispositivo')">Dispositivo</th>
          <th @click="sortData('sensor')">Sensor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedData" :key="index">
          <td>{{ row.umidade }}</td>
          <td>{{ new Date(row.time).toLocaleString() }}</td>
          <td>{{ row.dispositivo }}</td>
          <td>{{ row.sensor }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr>
 
</template>

<style scoped>


/* Cores de fundo e fontes */
.container {
  display: grid;
  justify-content: center;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; /* Bege suave */
  color: #9ecaa5; /* Verde escuro */
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

/* Estilo para o título principal */
h1 {
  text-align: center;
  color: #c8d7b7; 
  font-size: 36px;
  margin-bottom: 20px;
}

/* Estilo para o gráfico */
.chart-container {
  margin: 20px auto;
  text-align: center;
  max-width: 1000px;
}

/* Estilo para o título do gráfico */
.chart-container h2 {
  font-size: 24px;
  color: #2e4d33; /* Verde escuro */
  margin-bottom: 20px;
}

/* Estilo para a tabela */
.table-container {
  margin: 40px auto;
  text-align: center;
  max-width: 800px;
  background-color: #4caf50;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.table-container h2 {
  font-size: 24px;
  color: #2e9240;
  margin-bottom: 20px;
}

/* Estilo para a tabela */
table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

table th {
  background-color: #6ea777; /* Verde escuro */
  color: #fff;
}

table tr:nth-child(even) {
  background-color: #d5ddbb; /* Linha alternada com fundo bege claro */
}

table tr:hover {
  background-color: #4aaa5d; /* Verde claro no hover */
}

/* Estilo geral para o gráfico e a tabela */
canvas {
  max-width: 100%;
  height: auto;
}
</style>
