<script>
import BaseCard from '../BaseCard.vue';
import axios from 'axios';
export default {
    name: 'DetailPage',
    components: {
        BaseCard
    },
    data: () => ({
        word: null
    })
};
</script>

<template>
    <BaseCard />
</template>