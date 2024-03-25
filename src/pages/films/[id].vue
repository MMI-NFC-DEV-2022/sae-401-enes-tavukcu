<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';
const route = useRoute('/films/[id]');

let { data: film, error } = await supabase
    .from('films')
    .select(`
    
    *,
      genre(*),
      celebrite(*),
      saga(*),
      variants(*),
      realisateur(*),
      support(*),
      plateforme(*),
      acheter_louer(*),
      film_acheter_louer(*)
      
      `
    )
    .eq('id', route.params.id)
    .single();

console.log("donnee film", film);

if (error) {
    console.error(error);
}

</script>

<template>
    <div v-if="error">Erreur : {{ error.message }}</div>
    <div v-else class="">
        <AfficheSingle v-bind="film" />
    </div>
</template>