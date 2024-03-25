<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps<Database["public"]["Tables"]["celebrite"]["Row"] & { films: Tables<'films'>[] }>()
const route = useRoute('/celebrite/[id]');

// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>

<template>
    <div class="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-500">
        <div class="bg-slate-400 lg:mx-72  pt-32">
            <h2 class="text-center text-xl lg:text-2xl font-bold pb-10">{{ prenom }} {{ nom }}</h2>
            <div class="flex items-center justify-around">
                <img :src="image ?? undefined" class="  object-cover  w-32 h-40 lg:w-48 lg:h-64" alt="affiche du film" />

                <div class="space-y-4 lg:text-xl text-sm">
                    <p> <b>Age :</b> {{ age }}</p>
                    <p> <b>Pays :</b> {{ pays }}</p>
                    <p> <b>Nombres de films joué :</b> {{ nb_films }}</p>
                </div>
            </div>

            <div class="my-10 mx-4 border-t-2"></div>

            <h2 class="text-center font-bold text-xl pb-4"> Filmographie </h2>
            <ul class="grid grid-cols-2 lg:grid-cols-3 ">
                <li class="m-4" v-for="unFilm in films">
                    <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id } }">
                        <img :src="unFilm?.affiche ?? undefined" class="lg:w-56 lg:h-80 w-36 h-56 object-cover m-auto" />
                    </RouterLink>
                </li>
            </ul>


        </div>
    </div>
</template>