<script setup lang="ts">
defineProps<{
  type: "normal" | "big" | "medium" | "icon";
}>();
</script>

<template>
  <button
    class="rounded-full bg-primary w-fit duration-300 hover:bg-transparent hover:text-primary border-primary *:hover:bg-primary border"
    :class="{
      'px-5 py-2 text-base': type === 'normal',
      'px-7 py-3 text-lg': type === 'medium',
      'px-10 py-5 text-xl': type === 'big',
      'p-6 rounded-[50%] w-15 h-15 flex items-center justify-center':
        type === 'icon',
    }"
  >
    <slot></slot>
  </button>
</template>
