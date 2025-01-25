<script setup lang="ts">
const user = useSupabaseUser();

console.log(user.value);

const router = useRouter();
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

const isSignedUp = ref(false);

const errors = ref("");
const verifyMessage = ref("");

const logIn = async () => {
  try {
    if (email.value.length === 0 || password.value.length === 0) {
      errors.value = "Please fill in all fields";
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errors.value = error.message;
      throw error;
    } else {
      router.push("/");
    }
  } catch (error) {
    console.log("Error with creating user: ", error);
  }
};

const signUp = async () => {
  try {
    if (email.value.length === 0 || password.value.length === 0) {
      errors.value = "Please fill in all fields";
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    verifyMessage.value = "Please verify your email";

    if (error) {
      errors.value = error.message;
      throw error;
    }
  } catch (error) {
    console.log("Error with creating user: ", error);
  }
};

const signUpWithGithub = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    console.log(data, user);
  } catch (error) {
    console.log("Error with creating user by Github: ", error);
  }
};
</script>

<template>
  <section class="section">
    <div class="container flex gap-20 items-center justify-between">
      <div class="flex items-center gap-3">
        <template v-if="isSignedUp === false">
          <div
            class="p-5 border-white/70 border-[3px] rounded-full w-20 h-20 flex items-center justify-center"
          >
            <Icon name="uil:lock" size="40px" />
          </div>
          <h2 class="text-4xl">Login</h2>
        </template>
        <template v-else>
          <div
            class="p-5 border-white/70 border-[3px] rounded-full w-20 h-20 flex items-center justify-center"
          >
            <Icon name="uil:user" size="40px" />
          </div>
          <h2 class="text-4xl shrink-0">Sign Up</h2>
        </template>
      </div>
      <UiCard>
        <UiButton
          type="medium"
          class="w-full flex items-center justify-center gap-3 mt-4"
          @click.prevent="signUpWithGithub"
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
          <template v-if="isSignedUp === false">
            <UiButton type="medium" class="w-full mt-5" @click.prevent="logIn"
              >Login</UiButton
            >

            <p>Or</p>
            <button class="text-primary text-xl" @click="isSignedUp = true">
              Create an account
            </button>
          </template>
          <template v-else>
            <UiButton type="medium" class="w-full mt-5" @click.prevent="signUp"
              >Sign Up</UiButton
            >

            <p>Or</p>
            <button class="text-primary text-xl" @click="isSignedUp = false">
              Log In
            </button>
          </template>
        </form>
        <p class="text-red-500 text-center text-xl mt-5">
          {{ errors }}
        </p>
        <p class="text-green-500 text-center text-xl mt-5">
          {{ verifyMessage }}
        </p>
      </UiCard>
    </div>
  </section>
</template>
