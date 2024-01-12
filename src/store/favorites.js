import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);

    if(localStorage.getItem('favorites')) {
        favorites.value = JSON.parse(localStorage.getItem('favorites'))
    }

    const addFavorite = (pokemon) => {
        favorites.value.push(pokemon)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const removeFavorite = (id) => {
        favorites.value = favorites.value.filter((item) => item.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const findPokemon = name => favorites.value.find((item) => item.name === name)

    return {
        favorites,
        addFavorite,
        removeFavorite,
        findPokemon
    }
})