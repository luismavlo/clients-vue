import type { Client } from "./../clients/interfaces/clients";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useClientStore = defineStore("client", () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    //State propiertes
    currentPage,
    totalPages,
    clients,
    //getters
    // squereCount: computed(() => count.value * count.value),
    //actions
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },
    setPage(page: number) {
      if (currentPage.value === page) return;
      if (page <= 0) return;
      if (page > totalPages.value) return;

      currentPage.value = page;
    },
  };
});
