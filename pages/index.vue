<template>
  <section class="section gap-10">
    <h1 class="text-6xl mx-auto font-bold heading max-w-[1040px] heading">
      Make your links tiny and easy to share with NUXT-LINKS
    </h1>
    <p class="text-text text-xl max-w-[580px] mx-auto">
      Transform your long, cumbersome URLs into short and shareable links with
      TinyLink
    </p>
    <NuxtLink
      :to="{
        name: 'dashboard',
      }"
    >
      <UiButton type="big" class="mx-auto"> Short Now </UiButton>
    </NuxtLink>
  </section>
</template>
<style scoped>
.heading {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 200%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
