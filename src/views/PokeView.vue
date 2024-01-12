<script setup>
import { useGetData } from '@/composables/getData'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { data, getData, loading, error } = useGetData()

const back = () => {
    router.push('/pokemons')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokemon</div>
    <div v-if="data">
        <h1>Poke name: {{ $route.params.name }}</h1>
        <img :src="data.sprites?.front_default" alt="">
        <p>Peso: {{ data.weight }}</p>
        <p>Altura: {{ data.height }}</p>
    </div>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>