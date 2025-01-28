<script setup lang="ts">
defineProps<{
  link: {
    shortKey: string;
    longUrl: string | null;
    id: number;
  };
}>();
</script>

<template>
  <UiCard class="flex items-center justify-between cursor-pointer">
    <div>
      <h3 class="text-4xl text-primary shrink-0">
        {{ link.shortKey }}
      </h3>
      <p class="text-xl text-secondary-border mt-[7px]">
        <template v-if="link.longUrl && link.longUrl.length > 50">
          {{ link.longUrl.slice(0, 50) }}...
        </template>
        <template v-else>
          {{ link.longUrl }}
        </template>
      </p>
    </div>
    <UiButton type="icon">
      <Icon name="uil:copy-alt" size="32px" />
    </UiButton>
  </UiCard>
</template>
