<script>
export default {
    name: 'BasePagination'
}
</script>

<template>
    <nav class="pagination">
        <ul>
            <li v-for="link in words.links" :key="link.label" :class="{ 'active': link.active }" v-if(!link.url)
                disabled @click="fetchWords(link.url)">
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