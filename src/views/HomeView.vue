<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment" class="btn btn-primary">Incrementar</button>
</template>
