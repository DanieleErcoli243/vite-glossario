<script>
import BaseCard from '../BaseCard.vue';
const baseUri = 'http://localhost:8000/api/words/';
import axios from 'axios';
export default {
    name: 'DetailPage',
    components: {
        BaseCard
    },
    data: () => ({
        word: null
    }),
    methods: {
        async getWord() {
            try {
                // raccolgo i dati dal database
                const { data } = await axios.get(baseUri + this.$route.params.slug);
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio oggetto vuoto
                this.word = data;

            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }

        }
    },
    created() {
        this.getWord();
    }
};
</script>

<template>
    <BaseCard :word="word" :isDetail="true" />
</template>