<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase(2)';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
import { supabase } from '@/supabase';
defineProps<Database["public"]["Tables"]["films"]["Row"] & { celebrite: Tables<'celebrite'>[] } & { genre: Tables<'genre'>[] } & { saga: Tables<'saga'>[] } & { realisateur: Tables<'realisateur'>[] } & { support: Tables<'support'>[] } & { plateforme: Tables<'plateforme'>[] } & { acheter_louer: Tables<'acheter_louer'>[] } & { film_acheter_louer: Tables<'film_acheter_louer'>[] }>()
const route = useRoute('/celebrite/[id]');
// const route = useRoute('/realisateur/[id]');

// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>

<template>
    <img :src="banner ?? undefined" class="w-full h-80 object-cover filter brightness-50" />
    <div class="lg:mx-52 bg-slate-300 shadow-2xl   ">
        <h2 class="text-2xl text-center py-5 font-bold">{{ titre }}</h2>

        <div class="flex">
            <!-- <div class="">
        <img :src="affiche" class="w-auto pl-4"/>
        </div> -->
            <div class="px-4 space-y-4">
                <div class="flex items-end ">
                    <p><b>Note : </b></p>
                    <div v-for="n in note ?? 0" class="text-white">
                        <svg class="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                            <path
                                d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                        </svg>
                    </div>
                    <div v-for="n in (5 - (note ?? 0)) " class="text-white">
                        <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                            <path
                                d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                        </svg>
                    </div>
                </div>
                <p class="text-l "><b>Date de sortie : </b>{{ date_sortie }}</p>
                <p class="text-l "><b>Durée : </b>{{ duree }} minutes</p>
                <p v-for="film_realisateur in realisateur">

                    <b> Réalisateur : </b>
                    <RouterLink :to="{ name: '/realisateur/[id]', params: { id: film_realisateur.id } }"> <em
                            class="text-blue-600 hover:underline">{{ film_realisateur.prenom }} {{
        film_realisateur.nom }}</em>
                    </RouterLink>
                </p>
                <p class="lg:text-l text-justify"><b>Synopsis :</b><br> {{ synopsis }}</p>


                <div class="flex">
                    <p><b>Genre : </b></p>
                    <p v-for="(film_genre, index) in genre" :key="index" class="pl-2">
                        {{ film_genre.libelle }}
                        <span v-if="index < genre.length - 1"> / </span>
                    </p>
                </div>

                <p v-for="film_saga in saga">
                    <RouterLink :to="{ name: '/saga/[id]', params: { id: film_saga.id } }">
                        <b>Saga : </b> <em class="text-blue-600 hover:underline">{{ film_saga.libelle }}</em>
                    </RouterLink>
                </p>
            </div>
        </div>


        <div class="my-4 mx-4 border-t-2"></div>


        <div>

            <h2 class="text-2xl text-center py-5 mx-4 font-bold ">Casting</h2>

            <ul class="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3">
                <li class="m-4 " v-for="uneCelebrite in celebrite">
                    <RouterLink :to="{ name: '/celebrite/[id]', params: { id: uneCelebrite.id } }">
                        <img :src="uneCelebrite?.image ?? undefined"
                            class="w-24 h-24 object-cover rounded-full m-auto border-2 border-gray-400" />
                        <p class="text-center text-sm">{{ uneCelebrite?.prenom }} {{ uneCelebrite?.nom }} </p>
                    </RouterLink>
                </li>
            </ul>

            <div class="my-4 mx-4 border-t-2"></div>

        </div>


        <div>
            <h2 class="text-2xl text-center py-5 mx-4 font-bold">Supports</h2>
            <ul class="flex justify-center">
                <li class="m-4 " v-for="unSupport in support">
                    <p class="text-center text-sm">{{ unSupport?.support_type }} </p>
                    <img :src="unSupport?.support_img ?? undefined"
                        class="w-24 h-24 object-cover rounded-full m-auto border-2 border-gray-400" />
                </li>
            </ul>
        </div>

        <div class="my-4 mx-4 border-t-2"></div>


        <div>
            <h2 class="text-2xl text-center py-5 mx-4 font-bold">Plateformes</h2>
            <ul class="flex justify-center">
                <li class="m-4 " v-for="unePlateforme in plateforme">
                    <p class="text-center text-sm">{{ unePlateforme?.nom }} </p>
                    <img :src="unePlateforme?.img ?? undefined"
                        class="w-24 h-24 object-cover rounded-full m-auto border-2 border-gray-400" />
                </li>
            </ul>

        </div>


        <div class="my-4 mx-4 border-t-2"></div>


        <div class="flex flex-col items-center">
            <div>
                <h2 class="text-2xl text-center py-5 mx-4 font-bold">Où Acheter ?</h2>
                <ul class="flex justify-evenly">
                    <li class="m-4 flex flex-col items-center" v-for="unAchat_Louer in acheter_louer">
                        <p class="text-center text-sm">{{ unAchat_Louer?.nom }} </p>
                        <img :src="unAchat_Louer?.img ?? undefined"
                            class="w-24 h-24 object-cover rounded-full m-auto border-2 border-gray-400" />
                    </li>
                </ul>
            </div>
            <div>
                <ul class="m-4 flex justify-evenly">
                    <li class="px-12 text-yellow-600" v-for="Film_acheter_louer in film_acheter_louer">
                        {{ Film_acheter_louer?.prix }} €
                    </li>
                </ul>
            </div>

        </div>





    </div>
</template>