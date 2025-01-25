<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const LogOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    router.push("login/");

    if (error) throw error;
  } catch (error) {
    console.log("Error with logging out: ", error);
  }
};
</script>

<template>
  <header class="sticky top-0 border-b border-white/20 backdrop-blur-md z-50">
    <nav class="container py-4 flex items-center justify-between">
      <NuxtLink :to="{ name: 'index' }">
        <p class="text-2xl text-white uppercase font-bold">NUXT-LINKs</p>
      </NuxtLink>
      <ul>
        <div
          v-if="user?.aud !== 'authenticated'"
          class="flex items-center justify-between gap-5 basis-[250px]"
        >
          <li>
            <NuxtLink
              :to="{
                name: 'login',
              }"
            >
              <UiButton type="normal"> Sign In </UiButton>
            </NuxtLink>
          </li>
        </div>
        <div
          v-else
          class="flex items-center justify-between gap-5 basis-[250px]"
        >
          <p>{{ user.email }}</p>
          <UiButton type="normal" @click="LogOut"> Log Out</UiButton>
        </div>
      </ul>
    </nav>
  </header>
</template>
