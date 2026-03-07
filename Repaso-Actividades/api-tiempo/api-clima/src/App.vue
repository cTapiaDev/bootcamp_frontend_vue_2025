<script setup>
import { ref, onMounted } from 'vue'
import WeatherCard from './components/WeatherCard.vue'

const cities = [
  { name: 'Talca, Chile', lat: -35.4264, lon: -71.6554 },
  { name: 'Santiago, Chile', lat: -33.4489, lon: -70.6693 },
  { name: 'Buenos Aires, Argentina', lat: -34.6037, lon: -58.3816 },
  { name: 'Nueva York, EE.UU.', lat: 40.7128, lon: -74.006 },
  { name: 'Tokio, Japón', lat: 35.6895, lon: 139.6917 },
  { name: 'Madrid, España', lat: 40.4168, lon: -3.7038 },
]

const selectedCity = ref(cities[0])
const weatherData = ref(null)
const loading = ref(false)

const fetchWeather = async (lat, lon) => {
  loading.value = true
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    const response = await fetch(url)

    if (!response.ok) throw new Error('Error en la API')

    const data = await response.json()

    weatherData.value = {
      today: {
        tempMax: data.daily.temperature_2m_max[0],
        tempMin: data.daily.temperature_2m_min[0],
      },
      tomorrow: {
        tempMax: data.daily.temperature_2m_max[1],
        tempMin: data.daily.temperature_2m_min[1],
      },
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

const handleCityChange = () => {
  fetchWeather(selectedCity.value.lat, selectedCity.value.lon)
}

onMounted(() => {
  fetchWeather(selectedCity.value.lat, selectedCity.value.lon)
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-8">Pronóstico del Clima</h1>

    <div class="mb-8 w-full max-w-md">
      <label class="block text-sm font-medium text-gray-700 mb-2" for="city-select"
        >Selecciona una Ciudad:</label
      >
      <select
        id="city-select"
        v-model="selectedCity"
        @change="handleCityChange"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3 border outline-none cursor-pointer bg-white"
      >
        <option v-for="city in cities" :key="city.name" :value="city">
          {{ city.name }}
        </option>
      </select>
    </div>

    <div v-if="loading" class="text-gray-600 text-xl font-semibold animate-pulse">
      Consultando el clima...
    </div>

    <WeatherCard
      v-else-if="weatherData"
      :city="selectedCity.name"
      :today="weatherData.today"
      :tomorrow="weatherData.tomorrow"
    />
  </div>
</template>

<style scoped></style>
