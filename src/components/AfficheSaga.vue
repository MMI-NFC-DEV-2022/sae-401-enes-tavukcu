<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
import AfficheFilm from './AfficheFilm.vue';
defineProps<Database["public"]["Tables"]["saga"]["Row"] & { films: Tables<'films'>[] }>()
const route = useRoute('/celebrite/[id]');

// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>

<template>
    <div>
        <div class="relative">
            <img :src="banner ?? undefined" class="w-full h-60 lg:h-72 object-cover " />
            <div class="absolute inset-0 bg-black opacity-60"></div>

        </div>

        <h2 class=" text-center font-bold text-2xl py-4">{{ libelle }}</h2>

        <p class="text-center font-semibold text-lg">Films</p>

        <ul class="grid grid-cols-2 lg:grid-cols-3 lg:px-40">
            <li class="m-4" v-for="unFilm in films">
                <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id } }">
                    <img :src="unFilm?.affiche ?? undefined" class="w-44 h-60 lg:w-64 lg:h-96 object-cover m-auto " />
                    <p class="text-center font-semibold">{{ unFilm.titre }}</p>
                </RouterLink>
                
            </li>
        </ul>


    </div>
</template>