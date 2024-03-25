<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps <Database["public"]["Tables"]["films"]["Insert"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()

</script>

<template>
    <RouterLink :to="`/films/${id}`">
        <!-- <RouterLink :to="{name:'/films/[id]', params: {id}}"> -->
        <div class="lg:w-72 w-52 bg-gray-950 rounded-xl overflow-hidden transform transition-transform hover:scale-105">
            <img :src="affiche ?? undefined" class="lg:w-72 lg:h-96 w-52 h-72 object-cover" alt="affiche du film" />
            <div class="flex">
                <p class="lg:text-l text-sm pt-2 pl-2 text-white">{{ titre }}</p>
                <p class="text-sm pt-2 pl-3 text-white"> ({{ date_sortie }})</p>
            </div>
            <div class="flex pl-2 pb-2">
                <div v-for="n in note ?? 0" class="text-white">
                    <svg class="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                        <path
                            d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                    </svg>
                </div>
                <div v-for="n in (5 - (note ?? 0))" class="text-white">
                    <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                        <path
                            d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                    </svg>
                </div>
            </div>
            <!-- <p class="text-sm text-justify p-4">{{ synopsis }}</p> -->
        </div>
    </RouterLink>



</template>

