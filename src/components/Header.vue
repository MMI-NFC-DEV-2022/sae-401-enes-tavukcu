<script setup lang="ts">
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

</script>



<template>
  <nav class="absolute z-50 bg-gradient-to-b from-black via-transparent to-transparent w-full h-32 py-4 px-4 ">
    <div class="flex justify-between items-center">
      <div class="flex-shrink-0">
        <a href="/" class="text-white text-lg font-semibold">FilmET</a>
      </div>
      <div class="md:hidden">
        <!-- Hamburger icon -->
        <button id="menu-toggle" type="button"
          class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
          <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
            <path fill-rule="evenodd"
              d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:block">
        <div class="flex space-x-4">
          <RouterLink to="/" class="text-white hover:text-gray-300 hover:scale-110 ">Accueil</RouterLink>
          <RouterLink to="/films" class="text-white hover:text-gray-300 hover:scale-110">Films</RouterLink>
          <RouterLink to="/celebrite" class="text-white hover:text-gray-300 hover:scale-110">Célébrités</RouterLink>
          <RouterLink to="/login-logout" class="text-white hover:text-gray-300 hover:scale-110">Connexion</RouterLink>
        </div>
      </div>
    </div>
    <!-- Mobile menu, toggle classNamees based on menu state. -->
    <div id="mobile-menu" class="md:hidden hidden">
      <div class="flex flex-col space-y-4 pt-4 items-end">
        <RouterLink to="/" class="text-white hover:text-gray-300">Accueil</RouterLink>
        <RouterLink to="/films" class="text-white hover:text-gray-300">Films</RouterLink>
        <RouterLink to="/celebrite" class="text-white hover:text-gray-300">Célébrités</RouterLink>
        <RouterLink to="/login-logout" class="text-white hover:text-gray-300">Connexion</RouterLink>
      </div>
    </div>
  </nav>
</template>
