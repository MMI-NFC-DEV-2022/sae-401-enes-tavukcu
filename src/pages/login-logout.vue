<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>
<template>
    <div class="py-72 flex items-center gap-2 ">

        <div class="flex items-center gap-2 bg-green-700 shadow-indigo-500/40 p-6 rounded-2xl m-auto ">
            <button v-if="user" @pointerdown="supabase.auth.signOut()">
                Se déconnecter
            </button>


            <button v-else @pointerdown="supabase.auth.signInWithOAuth({provider: 'github'})">
                Se connecter avec Github

            </button>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" class="w-8 h-8" />
        </div>

    </div>
</template>