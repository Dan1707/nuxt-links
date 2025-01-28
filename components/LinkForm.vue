<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Database } from "~/database.types";

const client = useSupabaseClient<Database>();
const auth = useSupabaseUser();

const form = reactive({
  longUrl: "",
  ShortKey: "",
});

const handleLinkForm = async () => {
  try {
    const { data, error } = await client.from("links").insert({
      long_url: form.longUrl,
      key: form.ShortKey,
      user_id: auth.value?.id,
    });

    if (error) {
      throw error;
    } else {
      createShortKey();

      form.longUrl = "";
      console.log("Data inserted successfully:");
      emit("linkCreated");
    }
  } catch (error) {
    console.log("Error inserting data to 'links' table:", error);
  }
};

const createShortKey = (len: number = 6): void => {
  form.ShortKey = nanoid(len);
};

onMounted(() => {
  createShortKey();
});

const emit = defineEmits(["linkCreated"]);
</script>

<template>
  <h2 class="text-5xl font-bold">Dashboard</h2>
  <UiCard class="mt-10">
    <form class="flex items-center justify-between gap-3">
      <UiInput
        class="basis-[667px]"
        type="text"
        v-model="form.longUrl"
        placeholder="Paste or enter long URL"
      />
      <UiInput
        class="basis-[285px]"
        type="text"
        placeholder="Enter a key"
        v-model="form.ShortKey"
      />

      <UiButton type="medium" @click.prevent="handleLinkForm">
        Short!
      </UiButton>
    </form>
  </UiCard>
</template>
