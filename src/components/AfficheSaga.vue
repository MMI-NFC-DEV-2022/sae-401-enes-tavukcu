<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps <Database["public"]["Tables"]["saga"]["Row"] & {films:Tables<'films'>[]}>()
const route = useRoute('/celebrite/[id]');

// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>

<template>
    <div>
        <h2>{{ libelle }}</h2>

        <ul>
            <li class="m-4" v-for="unFilm in films">
                <RouterLink :to="{name:'/films/[id]', params: {id: unFilm.id}}">
                    <img :src="unFilm?.affiche ?? undefined" class="w-72 " />
                </RouterLink>
            </li>
        </ul>


    </div>
</template>