<script setup lang="ts">
import AfficheSaga from '@/components/AfficheSaga.vue';
import type { TypesFilm } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);
    

let { data: saga, error } = await supabase
    .from('saga')
    .select(`
    *,
      genre(*)`
      
    );

const tableauFilm = saga ?? [];



</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheSaga v-bind="saga" />

    </div>
</template>
