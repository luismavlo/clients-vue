import type { Client } from "../interfaces/clients";
import { ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/clients-api";

const getClient = async (id: number) => {
  const { data } = await clientsApi.get(`/clients/${id}`);

  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const { isLoading, data } = useQuery(["client", id], () => getClient(id), {
    cacheTime: 0,
  });

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return {
    //Propierties
    isLoading,
    client,
  };
};

export default useClient;
