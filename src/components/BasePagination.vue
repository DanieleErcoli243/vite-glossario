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
    <nav aria-label="Page navigation example" class="my-3">
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" :class="{ 'active': link.active }" :disabled="!link.url"
                @click="$emit('call', link.url)" class="page-item"><button class="page-link" href="#">{{ link.label
                    }}</button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>