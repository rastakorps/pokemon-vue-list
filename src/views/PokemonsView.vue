<script setup>
import Pokemon from '../components/Pokemon.vue'
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData'
const { data, getData, loading, error } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
    <h1>
       Pokemons 
    </h1>

    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="(pokemon, index) in data.results" :key="index" class="list-group-item">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    <Pokemon :name="pokemon.name"/>
                </router-link>
            </li>
        </ul>

        <div class="mt-3 mb-3">
            <button class="btn btn-success me-2" @click="getData(data.previous)" :disabled="!data.previous">Previous</button>
            <button class="btn btn-primary" @click="getData(data.next)" :disabled="!data.next">Next</button>
        </div>
    </div>
    
</template>