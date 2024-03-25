import type { TimerOptions } from 'timers';

const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface TypesFilm {
    id?: number;
    titre: string;
    date_sortie: Date;
    affiche: string;
    synopsis: string;
    bande_annonce: string;
    duree: TimerOptions;
    note: number;
    pays: string;
    genre: string;
}


