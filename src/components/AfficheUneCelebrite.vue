<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps <Database["public"]["Tables"]["celebrite"]["Row"] & {films:Tables<'films'>[]}>()
const route = useRoute('/celebrite/[id]');

// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>

<template>
    <div class="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-500">
        <div class="bg-slate-400 mx-72  pt-32">
            <h2 class="text-center text-2xl font-bold pb-10">{{ prenom }} {{ nom }}</h2>
            <div class="flex items-center justify-around">
                <img :src="image ?? undefined" class="  object-cover  w-48 h-64 " alt="affiche du film" />

                <div class="space-y-4">
                    <p> Age : {{ age }}</p>
                    <p> Pays : {{ pays }}</p>
                    <p> Nombres de films joué : {{ nb_films }}</p>
                </div>
            </div>

            <div class="my-10 mx-4 border-t-2"></div>

            <h2 class="text-center font-bold text-xl pb-4"> Filmographie </h2>
            <ul class="flex justify-center">
                <li class="m-4" v-for="unFilm in films">
                    <RouterLink :to="{name:'/films/[id]', params: {id: unFilm.id}}">
                        <img :src="unFilm?.affiche ?? undefined" class="w-56 h-80 object-cover " />
                    </RouterLink>
                </li>
            </ul>


        </div>
    </div>
</template>