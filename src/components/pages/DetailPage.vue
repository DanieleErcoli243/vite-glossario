<script>
import BaseCard from '../BaseCard.vue';
import { store } from '../../data/store.js'
const baseUri = 'http://localhost:8000/api/words/';
import axios from 'axios';
export default {
    name: 'DetailPage',
    components: {
        BaseCard
    },
    data: () => ({
        word: null,
        store
    }),
    methods: {
        async getWord() {
            store.isLoading = true;
            try {
                // raccolgo i dati dal database
                const res = await axios.get(baseUri + this.$route.params.slug);
                // destrutturo i data dalla res
                const { data } = res;
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio oggetto vuoto
                this.word = data;

            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            store.isLoading = false;
        }
    },
    created() {
        this.getWord();
    }
};
</script>

<template>

    <BaseCard v-if="!store.isLoading && word" :word="word" :isDetail="true" />
</template>