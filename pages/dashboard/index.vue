<script setup lang="ts">
import type { Database } from "~/database.types";

// fetching links from the server

const isLoading = ref(true);

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

interface link {
  id: number;
  key: string;
  long_url: string | null;
}

const linksArr = ref<link[]>([]);

const fetchLinks = async () => {
  try {
    if (user.value) {
      const { data, error } = await client
        .from("links")
        .select("*")
        .eq("user_id", user.value?.id);

      if (error) {
        throw error;
      } else {
        linksArr.value = data;
        console.log(linksArr.value);
      }
    }
  } catch (error) {
    console.log("Error fetching data from 'links' table:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

onMounted(() => {
  fetchLinks();
});
</script>

<template>
  <section>
    <div class="container">
      <LinkForm @linkCreated="fetchLinks" />
      <div class="mt-10 flex gap-5 flex-col">
        <template v-if="!isLoading">
          <linkItem
            v-for="link in linksArr"
            :key="link?.id"
            :link="{
              shortKey: link?.key,
              longUrl: link?.long_url,
              id: link?.id,
            }"
          />
        </template>
        <template v-else>
          <UiCard class="flex items-center gap-3 justify-center text-xl">
            <div
              class="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"
            ></div>
            Loading...
          </UiCard>
        </template>
      </div>
    </div>
  </section>
</template>
