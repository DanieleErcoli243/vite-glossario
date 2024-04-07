<script>
import axios from 'axios';
import BaseCard from '../BaseCard.vue';
const baseUri = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: {
        BaseCard
    },
    data: () => ({
        words: []
    }),
    methods: {
        async fetchWords() {
            try {
                // raccolgo i dati dal database
                const { data } = await axios.get(baseUri);
                // stampo i risultati in console
                console.log(data);
                // riassegno i dati al mio array vuoto
                this.words = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
        }
    },
    created() {
        // chiamo il metodo all'avvio della pagina
        this.fetchWords();
    }
};
</script>

<template>
    <div class="row">
        <BaseCard v-for="word in words" :key="word.id" :word="word" :isDetail="false" />
    </div>
</template>

<style lang="scss" scoped>
/* riga */

.row {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>