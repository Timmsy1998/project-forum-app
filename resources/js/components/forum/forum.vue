<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question v-for="question in filteredQuestions" :key="question.path" :question=question></question>
                <v-spacer></v-spacer>
                <div class="text-xs-center">
                    <v-pagination v-model="meta.current_page" :length="meta.last_page" @input="changePage"></v-pagination>
                </div>
            </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import question from './question'
    import AppSidebar from './AppSidebar'
    export default {
        data() {
            return {
                questions: {},
                meta: {},
                id: 0,
            }
        },
        components: {
            question,
            AppSidebar
        },
        created() {
            this.fetchQuestions()
            this.listen()
        },
        computed: {
            filteredQuestions() {
                if (this.id) {
                    return this.questions.filter(question => question.cat_id === this.id)
                }
                return this.questions;
            }
        },
        methods: {
            fetchQuestions(page) {
                let url = page ? `/api/question?page=${page}` : '/api/question'
                axios.get(url)
                    .then(res => {
                        this.questions = res.data.data
                        this.meta = res.data.meta
                    })
                    .catch(error => console.log(error.response.data))
            },
            changePage(page) {
                this.fetchQuestions(page)
            },
            listen() {
                EventBus.$on('filterCategory', (id) => {
                    this.id = id;
                })
            }
        },
    }
</script>

<style>

</style>