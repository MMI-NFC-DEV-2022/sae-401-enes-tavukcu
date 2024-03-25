<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);
    

let { data: data, error } = await supabase
    .from('films')
    .select(`
    *,
      genre(*)`
      
    );

const tableauFilm = data ?? [];





</script>

<template>

    <!-- 
    <h1 class="text-3xl font-bold text-center py-4">Films</h1> -->

    <div class="relative">
        <img src="https://img.freepik.com/photos-gratuite/assortiment-elements-cinema-fond-rouge-espace-copie_23-2148457848.jpg?t=st=1710943946~exp=1710947546~hmac=11319428c1ab94cc3188a8e92162424de8d8977a1b137d9d685dafbf5fc0bc09&w=996"
            alt="Banner Image" class="w-full h-96 object-cover">

        <!-- Filtre sombre -->
        <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <h1 class="text-center text-3xl font-bold py-4">Films</h1>


    


            <div class="flex flex-wrap justify-center gap-8 py-20 px-20">
                <!-- <div class="grid grid-cols-4 gap-1 justify-center py-20 "> -->
                <AfficheFilm v-for="film in tableauFilm" v-bind="film" />

            </div>
            <!-- </div> -->
</template>
