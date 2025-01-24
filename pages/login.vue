<script setup lang="ts">
const router = useRouter();
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

const logIn = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      throw error;
    } else {
      router.push("/");
    }
  } catch (error) {
    console.log("Error with creating user: ", error);
  }
};
</script>

<template>
  <section class="section">
    <div class="container flex gap-20 items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="p-5 border-white/70 border-[3px] rounded-full w-20 h-20 flex items-center justify-center"
        >
          <Icon name="uil:lock" size="40px" />
        </div>
        <h2 class="text-4xl">Login</h2>
      </div>
      <UiCard>
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
          <UiButton type="medium" class="w-full mt-5" @click.prevent="logIn"
            >Login</UiButton
          >

          <p>Or</p>
          <NuxtLink :to="{ name: 'signUp' }">
            <button class="text-primary text-xl">Create an account</button>
          </NuxtLink>
        </form>
      </UiCard>
    </div>
  </section>
</template>
