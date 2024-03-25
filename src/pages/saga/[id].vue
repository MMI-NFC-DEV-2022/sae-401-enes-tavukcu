<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
import AfficheSaga from '@/components/AfficheSaga.vue';
const route = useRoute('/films/[id]');

let {data : saga, error} = await supabase
    .from('saga')
    .select(`
    
    *,
    films(*)`
    )
    .eq('id', route.params.id)
    .single();
    
console.log("donnee saga", saga);  

    if (error) {
        console.error(error);
    }

</script>

<template>
    <div v-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
        <AfficheSaga v-bind="saga" />
    </div>
</template>