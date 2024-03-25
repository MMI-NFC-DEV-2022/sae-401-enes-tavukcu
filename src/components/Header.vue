<template>
  <nav class="z-50 bg-black bg-opacity-85 backdrop-filter backdrop-blur-md w-full  p-4 fixed">
    <div class="flex justify-between items-center">
      <div class="flex-shrink-0">
        <!-- Remplacez "chemin/vers/mon-logo.png" par le chemin de votre logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-white text-lg font-semibold">FilmET</a>
        </div>


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
          <RouterLink to="/" class="text-white hover:text-gray-300">Accueil</RouterLink>
          <RouterLink to="/films" class="text-white hover:text-gray-300">Films</RouterLink>
          <RouterLink to="/celebrite" class="text-white hover:text-gray-300">Célébrités</RouterLink>
          <RouterLink to="/films/edit/" class="text-white hover:text-gray-300">Ajouter un film</RouterLink>
          <RouterLink to="/login-logout" class="text-white hover:text-gray-300">Connexion</RouterLink>
        </div>
      </div>
    </div>
    <!-- Mobile menu, toggle classes based on menu state -->
    <div id="mobile-menu" class="md:hidden hidden">
      <div class="p-2 pt-10 space-y-4 sm:px-3">
        <RouterLink to="/" class="block text-white hover:text-gray-300">Accueil</RouterLink>
        <RouterLink to="/films" class="block text-white hover:text-gray-300">Films</RouterLink>
        <RouterLink to="/fimls/edit" class="block text-white hover:text-gray-300">Célébrités</RouterLink>
        <RouterLink to="/login-logout" class="block text-white hover:text-gray-300">Connexion</RouterLink>
      </div>
    </div>
  </nav>
</template>


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