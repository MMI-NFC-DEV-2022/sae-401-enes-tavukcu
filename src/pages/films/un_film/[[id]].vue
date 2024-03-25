<script setup lang="ts">
import type { SchemaOffreMaison } from '@/types';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';
 
console.log(supabase);
    
let {data : tableaumaisons, error} = await supabase
    .from('Maison')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheSingle v-bind="ma"

    </div>
</template>