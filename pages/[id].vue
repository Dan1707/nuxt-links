<script setup lang="ts">
import type { Database } from "~/database.types";

const params = useRoute().params;
const client = useSupabaseClient<Database>();

const { data } = await useAsyncData("link", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("key", params.id.toString())
    .single();

  if (error) {
    throw error;
  }

  console.log(data);

  return data;
});

if (data.value?.long_url) {
  useExternalRedirect(data.value.long_url);
}
</script>

<template>
  <p class="text-center pt-[200px]">
    {{ params }}
  </p>
  <div>
    {{ data?.created_at }}
  </div>
</template>
