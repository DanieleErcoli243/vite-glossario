<script>
export default {
    name: 'BaseCard',
    props: {
        word: Object,
        isDetail: Boolean
    },
    computed: {
        abstract() {
            const abstract = this.word.definition.substring(0, 150);
            return abstract + '...';
        }
    }
}
</script>

<template>

    <div class="col-3 my-3" v-if="!isDetail">
        <div class="card">
            <div class="card-header text-center">
                <h4>{{ word.title }}</h4>
            </div>
            <div class="card-body" style="height: 200px;">
                <p>{{ isDetail ? word.definition : abstract }}</p>
                <div class="button align-items-center justify-content-center">
                    <RouterLink :to="{ name: 'detail', params: { slug: word.slug } }" class="btn btn-sm btn-primary">
                        Vedi</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div class="col my-3" v-if="isDetail">
        <div class="card">
            <div class="card-header text-center">
                <h4>{{ word.title }}</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <p><strong>Creato il: </strong> {{ word.created_at.slice(0, -5) }}</p>
                        <p><strong>Modificato il: </strong> {{ word.updated_at.slice(0, -5) }}</p>
                        <p v-if="word.links.length"><strong>Links: </strong><a :href="link.url"
                                v-for="link in word.links" :key="link.id">{{ link.label
                                }}</a>
                        </p>
                        <p><strong>Tags: </strong><span class="badge me-2" :style="{ 'backgroundColor': tag.color }"
                                v-for="tag in word.tags" :key="tag.id">{{ tag.label }}</span> </p>
                    </div>
                    <div class="col-8">
                        <p>{{ word.definition }}</p>
                    </div>
                </div>
            </div>
        </div>
        <RouterLink :to="{ name: 'home' }" class="btn btn-secondary my-4">Torna indietro</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.card-body {
    overflow: auto;
    position: relative;
}

.card-body::-webkit-scrollbar {
    width: 10px;
}

.card-body::-webkit-scrollbar-track {
    background: white;
}

.card-body::-webkit-scrollbar-thumb {
    background: rgba(42, 41, 41, 0.383);
}

.card {

    transition: all 0.5s linear;

    &:hover {

        .button {
            display: flex;
        }
    }

}

.button {
    transition: all 0.5s linear;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 150px;

    display: none;
}
</style>