export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (user.value) return;

  const allowedRoutes = ["signUp", "login"];
  if (!allowedRoutes.includes(to.name)) {
    return navigateTo("/login");
  }
});
