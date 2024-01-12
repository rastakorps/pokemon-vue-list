<script setup>
import { useFavoritesStore} from '@/store/favorites'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavorites = useFavoritesStore()
const { favorites } = storeToRefs(useFavorites)
const { removeFavorite } = useFavorites
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favorites.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li 
            class="list-group-item" 
            v-for="pokemon in favorites"
            :key="pokemon.id"
        >
            <div>
                {{ pokemon.name }}
            </div>
            <div>
                <router-link :to="`/pokemons/${pokemon.name}`" class="btn btn-outline-primary me-2">Más información</router-link>
                <button class="btn btn-sm btn-danger" @click="removeFavorite(pokemon.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>