<script setup lang="ts">
import AfficheCelebrite from '@/components/AfficheCelebrite.vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';

console.log(supabase);


let { data: celebrite, error } = await supabase
    .from('celebrite')
    .select(`
    *
    `

    );
if (error) {
    console.error(error);
}

const tableauCelebrite = celebrite ?? [];



</script>

<template>

    <div class="relative">
        <img src="https://img.freepik.com/photos-gratuite/statuette-oscar-film-pop-corn_23-2147699798.jpg?t=st=1711139552~exp=1711143152~hmac=a38fa7551f897663a45215eba251a8524ece480e62324fc9aaaad2b72a69ea24&w=1060"
            alt="
            Banner Image" class="w-full h-96 object-cover">

        <!-- Filtre sombre -->
        <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <h1 class="text-center text-l lg:text-3xl font-bold py-8">Célébrités</h1>

    <div class="px-20 flex justify-center ">
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-5">
            <AfficheCelebrite v-for="celebrite in tableauCelebrite" v-bind="celebrite" />

        </div>
    </div>
</template>
