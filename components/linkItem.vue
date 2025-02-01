<script setup lang="ts">
const props = defineProps<{
  link: {
    shortKey: string;
    longUrl: string | null;
    id: number;
  };
}>();

const config = useRuntimeConfig();

const handleCopy = () => {
  navigator.clipboard.writeText(
    `${config.public.appUrl}${props.link.shortKey}`
  );
};
</script>

<template>
  <UiCard class="flex items-center justify-between cursor-pointer">
    <div>
      <h3 class="text-4xl text-primary shrink-0">
        {{ link.shortKey }}
      </h3>
      <p class="text-xl text-secondary-border mt-[7px]">
        <template v-if="link.longUrl && link.longUrl.length > 50">
          {{ link.longUrl.slice(0, 30) }}...
        </template>
        <template v-else>
          {{ link.longUrl }}
        </template>
      </p>
    </div>
    <UiButton type="icon" @click="handleCopy">
      <Icon name="uil:copy-alt" size="32px" />
    </UiButton>
  </UiCard>
</template>
