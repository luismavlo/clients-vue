<script setup lang="ts">
import { toRef, ref, watch } from "vue";

interface Props {
  totalPages: number;
  currentPage: number;
}

interface Emits {
  (e: "pageChanged", page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const totalPages = toRef(props, "totalPages");
const currentPage = toRef(props, "currentPage");

const totalPagesNumbers = ref<number[]>([]);

watch(
  totalPages,
  () => {
    totalPagesNumbers.value = [...new Array(totalPages.value)].map(
      (value, index) => index + 1
    );
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <button
      :disabled="currentPage === 1"
      @click="emits('pageChanged', currentPage - 1)"
    >
      Anterior
    </button>
    <button
      v-for="number of totalPagesNumbers"
      :key="number"
      :class="{ active: currentPage === number }"
      @click="emits('pageChanged', number)"
    >
      {{ number }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="emits('pageChanged', currentPage + 1)"
    >
      Siguiente
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-boder);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.3s;
  border: 1px solid rgb(44, 43, 43);
}

button:hover {
  background-color: hsl(160, 100%, 37%, 0.2);
  transition: all 0.3s;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  background-color: hsl(160, 100%, 37%, 0.2);
}
</style>
