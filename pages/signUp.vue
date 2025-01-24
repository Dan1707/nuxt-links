<script setup lang="ts">
const email = ref("");
const password = ref("");
const supabase = useSupabaseClient();

const createUser = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.log("Error with creating user: ", error);
  }
};
</script>

<template>
  <section class="section">
    <div class="container flex gap-36 items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="p-5 border-white/70 border-[3px] rounded-full w-20 h-20 flex items-center justify-center"
        >
          <Icon name="uil:user" size="40px" />
        </div>
        <h2 class="text-4xl shrink-0">Sign Up</h2>
      </div>
      <UiCard>
        <UiButton
          type="medium"
          class="w-full flex items-center justify-center gap-3 mt-4"
        >
          <Icon name="uil:github" class="bg-white" size="40px" />
          Continue with Github
        </UiButton>

        <hr class="bg-white/10 border-none h-[2px] my-5 w-full rounded-xl" />

        <form class="flex items-center flex-col gap-3">
          <UiInput
            type="text"
            label="Email"
            placeholder="Email"
            v-model="email"
          />
          <UiInput
            type="text"
            label="Password"
            placeholder="Password"
            v-model="password"
          />
          <UiButton
            type="medium"
            class="w-full mt-5"
            @click.prevent="createUser"
            >Sign Up</UiButton
          >

          <p>Or</p>
          <NuxtLink :to="{ name: 'login' }">
            <button class="text-primary text-xl">Login</button>
          </NuxtLink>
        </form>
      </UiCard>
    </div>
  </section>
</template>
