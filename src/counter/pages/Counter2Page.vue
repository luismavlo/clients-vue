<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup";
import { storeToRefs } from "pinia";
import CounterSetupValue from "../components/CounterSetupValue.vue";

const counterOptions = useCounterSetupStore();
const { count, squereCount } = storeToRefs(counterOptions);
</script>

<template>
  <h1>Pinia Setup</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squereCount }}</h4>

  <br />
  <button @click="counterOptions.increment()">+1</button>
  <button @click="counterOptions.incrementBy(2)">+2</button>
  <button @click="counterOptions.incrementBy(5)">+5</button>
  <button @click="counterOptions.$reset()">Reset</button>

  <br />
  <CounterSetupValue />
</template>

<style scoped>
button {
  margin-right: 5px;
  min-width: 2em;
  height: 2em;
}
</style>
