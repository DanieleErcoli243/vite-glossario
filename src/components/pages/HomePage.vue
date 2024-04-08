<script>
import axios from 'axios';
import BaseCard from '../BaseCard.vue';
import BasePagination from '../BasePagination.vue'
import { store } from '../../data/store.js'
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: {
        BaseCard, BasePagination
    },
    data: () => ({
        words: [],
        store
    }),
    methods: {
        async fetchWords(endpoint) {
            store.isLoading = true;
            if (!endpoint) endpoint = baseUri;
            try {
                // raccolgo i dati dal database
                const res = await axios.get(endpoint);
                // destrutturo i data dalla res
                const { data } = res;
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio array vuoto
                this.words = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            store.isLoading = false;
        }
    },
    created() {
        // chiamo il metodo all'avvio della pagina
        this.fetchWords();
    }
};
</script>

<template>

    <div v-if="!store.isLoading" class="row my-4">
        <h1 class="text-center">Words</h1>
        <BaseCard v-for="word in words.data" :key="word.id" :word="word" :isDetail="false" />
        <BasePagination :links="words.links" @close="fetchWords(words.links.url)" />
    </div>

</template>


<style lang="scss" scoped></style>