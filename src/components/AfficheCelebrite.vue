<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps <Database["public"]["Tables"]["celebrite"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()

</script>

<template>
    <RouterLink :to="`/celebrite/${id}`">
        <!-- <RouterLink :to="{name:'/films/[id]', params: {id}}"> -->
        <div class="w-40 ">

            <img :src="image ?? undefined" class="rounded-full h-40 object-cover  w-40  border-2 border-gray-400"
                alt="affiche du film" />

            <p class="text-sm pt-2 pl-2 text-center font-semibold">{{ prenom }} {{ nom }}</p>


        </div>
    </RouterLink>
</template>

