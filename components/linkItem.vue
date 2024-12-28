<script setup lang="ts">
interface link {
  shortKey: string;
  longUrl: string;
  id: string;
}

defineProps<{
  link: link;
}>();
</script>

<template>
  <UiCard class="flex items-center justify-between">
    <div>
      <h3 class="text-4xl text-primary">{{ link.shortKey }}</h3>
      <p class="text-xl text-secondary-border mt-[7px]">
        {{ link.longUrl }}
      </p>
    </div>
    <UiButton type="icon">
      <Icon name="uil:copy-alt" size="32px" />
    </UiButton>
  </UiCard>
</template>
