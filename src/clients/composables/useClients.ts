import { useQuery } from "@tanstack/vue-query";

import clientsApi from "@/api/clients-api";
import type { Client } from "../interfaces/clients";
import { useClientStore } from "@/store/clients";
import { storeToRefs } from "pinia";
import { watch, computed } from "vue";

const getClients = async (page: number): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(["clients?page=", currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) store.setClients(clients);
  });

  return {
    //Propierties
    isLoading,
    clients,
    currentPage,
    totalPages,

    //Methods
    getPage(page: number) {
      store.setPage(page);
    },

    //Getters
    totalPagesNumbers: computed(() =>
      [...new Array(totalPages.value)].map((value, index) => index + 1)
    ),
  };
};

export default useClients;
