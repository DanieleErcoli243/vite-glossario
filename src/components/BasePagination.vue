<script>
export default {
    name: 'BasePagination',
    props: {
        links: Array
    },
    emits: [
        'call'
    ]
}



</script>

<template>
    <nav class="pagination">
        <ul>
            <li v-for="link in links" :key="link.label" :class="{ 'active': link.active }" v-if(!link.url) disabled
                @click="$emit('call', link.url)">
                <button>{{ link.label }}</button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
/* bottoni per la paginazione */
.pagination {
    margin-top: 20px;

    ul {
        list-style-type: none;
        display: flex;

        li {
            cursor: pointer;
        }

    }
}

/* classe dinamica */

.active {
    background-color: rgb(187, 41, 209);
    color: white;
}
</style>