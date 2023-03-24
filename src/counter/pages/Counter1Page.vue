<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-options";
import { storeToRefs } from "pinia";
import CounterOptionValue from "../components/CounterOptionValue.vue";

const counterOptions = useCounterOptionsStore();
const { count, squereCount } = storeToRefs(counterOptions);
</script>

<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squereCount }}</h4>

  <br />
  <button @click="counterOptions.increment()">+1</button>
  <button @click="counterOptions.incrementBy(2)">+2</button>
  <button @click="counterOptions.incrementBy(5)">+5</button>
  <button @click="counterOptions.$reset()">Reset</button>

  <br />
  <CounterOptionValue />
</template>

<style scoped>
button {
  margin-right: 5px;
  min-width: 2em;
  height: 2em;
}
</style>
