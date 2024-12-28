<script setup lang="ts"></script>

<template>
  <h2 class="text-5xl font-bold">Dashboard</h2>
  <UiCard class="mt-10">
    <form class="flex items-center justify-between gap-3">
      <UiInput
        class="basis-[667px]"
        type="text"
        placeholder="Paste or enter long URL"
      />
      <UiInput class="basis-[285px]" type="text" placeholder="Enter a key" />
      <UiButton type="medium"> Short! </UiButton>
    </form>
  </UiCard>
</template>
