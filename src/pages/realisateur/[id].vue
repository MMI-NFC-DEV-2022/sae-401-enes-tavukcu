<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
import AfficheRealisateur from '@/components/AfficheRealisateur.vue';
const route = useRoute('/realisateur/[id]');

let { data: realisateur, error } = await supabase
    .from('realisateur')
    .select(`
    
    *,
    films(*)`
    )
    .eq('id', route.params.id)
    .single();

console.log("donnee saga", realisateur);

if (error) {
    console.error(error);
}

</script>

<template>
    <div v-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
        <AfficheRealisateur v-bind="realisateur" />
    </div>
</template>