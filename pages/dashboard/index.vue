<script setup lang="ts">
interface link {
  shortKey: string;
  longUrl: string;
  id: string;
}

const links: link[] = [
  {
    shortKey: "abc123",
    longUrl: "https://example.com/some-page",
    id: "1",
  },
  {
    shortKey: "xyz456",
    longUrl: "https://anotherexample.com/another-page",
    id: "2",
  },
  {
    shortKey: "lmn789",
    longUrl: "https://yetanotherexample.com/yet-another-page",
    id: "3",
  },
  {
    shortKey: "pqr012",
    longUrl: "https://mysite.com/special-page",
    id: "4",
  },
  {
    shortKey: "stu345",
    longUrl: "https://coolwebsite.com/cool-page",
    id: "5",
  },
];
</script>

<template>
  <section>
    <div class="container">
      <LinkForm />
      <div class="mt-10 flex gap-5 flex-col">
        <linkItem v-for="link in links" :key="link.id" :link="link" />
      </div>
    </div>
  </section>
</template>
