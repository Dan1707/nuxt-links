<script setup lang="ts">
interface link {
  to: string;
  label: string;
}

const links = ref<link[]>([
  {
    to: "/",
    label: "home",
  },
  {
    to: "/login",
    label: "login",
  },
]);
</script>

<template>
  <header class="sticky top-0 border-b border-white/20 backdrop-blur-md z-50">
    <nav class="container py-4 flex items-center justify-between">
      <NuxtLink :to="{ name: 'index' }">
        <p class="text-2xl text-white uppercase font-bold">NUXT-LINKs</p>
      </NuxtLink>
      <ul class="flex items-center justify-between gap-5 basis-[250px]">
        <li v-for="link in links" class="capitalize" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="{
              name: 'signUp',
            }"
          >
            <UiButton type="normal"> Sign Up </UiButton>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
