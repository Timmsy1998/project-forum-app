<template>
    <v-card elevation="2" outlined shaped>
        <v-container fluid>
            <v-card-title>
                Create a Post
            </v-card-title>
            <v-card-subtitle>
                Create a new post on the forum
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-form @submit.prevent="create">
                <v-text-field label="Title" v-model="form.title" type="text" required></v-text-field>
                <v-select :items="categories" item-text="name" item-value="id" v-model="form.category_id" label="Category" autocomplete></v-select>
                <v-md-editor v-model="form.body" height="400px"></v-md-editor>
                <v-btn color="green" type="submit">Create</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    title: null,
                    category_id: null,
                    body: '',
                },
                categories: {},
                errors: {},
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },
        methods: {
            create() {
                axios.post('/api/question', this.form)
                    .then(res => this.$router.push(res.data.path))
                    .catch(error => this.errors = error.response.data.error)
            }
        },
    }
</script>

<style>

</style>