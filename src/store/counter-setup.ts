import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterSetupStore = defineStore("counterSetup", () => {
  const count = ref<number>(0);
  const lastChanged = ref<Date>();

  const incrementBy = (value: number) => {
    count.value += value;
    lastChanged.value = new Date();
  };

  return {
    //State propiertes
    count,
    lastChanged,
    //getters
    squereCount: computed(() => count.value * count.value),
    //actions
    incrementBy,
    increment: () => incrementBy(1),
  };
});
