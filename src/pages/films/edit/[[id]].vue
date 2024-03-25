<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";
import type { Database, Tables } from "@/supabase(2)";
const router = useRouter();
const films = ref<Partial<Tables<'films'>>>({});
const route = useRoute('/films/edit/[[id]]');
async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("films").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :", data);
        router.push({ name: "/films/edit/[[id]]", params: { id: data[0].id } });
    }
}
if (route.params.id) {
    const { data, error } = await supabase.from("Films").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <div>
        <div class="pt-20 flex justify-center">

            <AfficheFilm v-bind="films" />
        </div>
        <div class="p-2 flex justify-center">
            <FormKit @submit="upsertFilm" type="form" v-model="films" :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                },
            }">
                <FormKit name="titre" label="Titre du film" />
                <FormKit name="date_sortie" label="Date de sortie" />

                <FormKit name="synopsis" label="Synopsis du film" />
                <FormKit name="note" type="number" label="Note /5" />
                <FormKit name="affiche" label="Image du film" />
            </FormKit>
        </div>
    </div>
</template>