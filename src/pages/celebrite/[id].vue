<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
import AfficheUneCelebrite from '@/components/AfficheUneCelebrite.vue';
const route = useRoute('/celebrite/[id]');

let {data : celebrite, error} = await supabase
    .from('celebrite')
    .select(`
    
    *,
    films(*)`
    )
    .eq('id', route.params.id)
    .single();
    
console.log("donnee celebrite", celebrite);  

    if (error) {
        console.error(error);
    }

</script>

<template>
    <div v-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
        <AfficheUneCelebrite v-bind="celebrite" />
    </div>
</template>