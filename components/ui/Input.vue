<script setup lang="ts">
defineProps({
  type: String,
  placeholder: String,
  label: String,
});
</script>

<template>
  <label :for="label" class="text-left w-full text-white/70 text-lg">
    {{ label }}
    <p>
      <input
        class="border rounded-full border-secondary-border text-white/70 bg-input focus:outline-none py-3 px-5 text-xl w-full"
        :type="type"
        :placeholder="placeholder"
        :class="{ 'mt-2': label }"
      />
    </p>
  </label>
</template>
