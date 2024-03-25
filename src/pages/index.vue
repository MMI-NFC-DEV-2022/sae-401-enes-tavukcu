<script setup lang="ts">

import { supabase } from '@/supabase';

console.log("supabase :", supabase);
</script>

<template>
  <main>
    <div class=" relative">
      <img
        src="//img.freepik.com/photos-gratuite/claperboard-pop-corn-bande-film-billets-cinema-bureau-bois_23-2148188189.jpg?t=st=1711151476~exp=1711155076~hmac=fff21bda70541a02cbdaf74a99f54af9d1ae5ab163c21397a02f18c37ebcd123&w=1060"
        alt="Banner Image" class="w-full h-96 object-cover">
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <div class="lg:px-72 pb-3 mb-5 bg-slate-500">

      <h1 class="text-center italic lg:text-2xl font-bold lg:py-8 py-6 ">Bienvenue sur Film ET !</h1>

      <div class="">
        <div class="lg:flex lg:items-center ">
          <p class="px-9 text-justify lg:border-r-black lg:border-r-2 my-4">
            Plongez dans l'univers fascinant du cinéma avec notre plateforme de référencement de films. Que vous soyez
            un
            cinéphile passionné à la recherche de vos prochains chefs-d'œuvre ou simplement curieux de découvrir de
            nouveaux
            titres, vous êtes au bon endroit !

            Sur Film ET, vous pouvez explorer une vaste collection de films de différents genres, des classiques
            intemporels aux dernières sorties. Grâce à notre interface conviviale et nos fonctionnalités de recherche
            avancées, trouver le film parfait pour votre soirée cinéma n'a jamais été aussi facile.
          </p>
          <img
            src="https://img.freepik.com/photos-gratuite/homme-brun-excite-met-lunettes-3d-amis-chemises-carreaux-bleus-mangent-du-pop-corn-regardent-film-fond-orange_197531-29717.jpg?t=st=1711152639~exp=1711156239~hmac=e155eb48ffd6b949b9c39f7243cfa02e2f1276222cc9378a99e2804a533e6508&w=1060"
            class="lg:w-96 lg:pl-9 w-96 m-auto pt-4 border-t-black border-t-2 lg:border-t-0" alt="Banner Image">
        </div>
      </div>

    </div>
  </main>
</template>
