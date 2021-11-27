<template>
    <v-card class="mt-4 mb-4" elevation="2" outlined shaped>
        <v-container fluid>
            <v-card-title>
                Create a new Category
            </v-card-title>
            <v-card-subtitle>
                Create a new category on the forum
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-form @submit.prevent="submit">
                <v-text-field label="Category name" v-model="form.name" required></v-text-field>
                <v-btn color="green" type="submit" v-if="editSlug">Update</v-btn>
                <v-btn color="blue" type="submit" v-else>Create</v-btn>
            </v-form>
            <v-card>
                <v-toolbar color="indigo" dark dense class="mt-4" elevation="2">
                    <v-toolbar-title>Existing Categories</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <div v-for="(category,index) in categories" :key="category.id">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{category.name}}</v-list-item-title>
                            </v-list-item-content>
                            <v-card-actions>
                                <v-btn text color="green" @click="edit(index)">Edit</v-btn>
                                <v-btn text color="red" @click="destroy(category.slug,index)">Delete</v-btn>
                            </v-card-actions>
                        </v-list-item>
                        <v-divider></v-divider>
                    </div>
                </v-list>
            </v-card>
        </v-container>
    </v-card>
</template>

<script>

    export default {
        data() {
            return {
                form: {
                    name: null
                },
                categories: {},
                editSlug: null,
                errors: null,
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data.sort((a, b) => a.name.localeCompare(b.name)))
        },
        methods: {
            submit() {
                this.editSlug ? this.update() : this.create()
            },
            refresh() {
                axios.get('/api/category')
                    .then(res => this.categories = res.data.data.sort((a, b) => a.name.localeCompare(b.name)))
            },
            update() {
                axios.patch(`/api/category/${this.editSlug}`, this.form)
                    .then(res => {
                        this.refresh();
                        this.form.name = null;
                    })
                    .catch(error => (this.errors = error.response.data.errors));
            },
            create() {
                axios.post('/api/category', this.form)
                    .then(res => {
                        this.categories.unshift(res.data);
                        this.form.name = null;
                    })
                    .catch(error => (this.errors = error.response.data.errors));
                this.refresh();
            },
            destroy(slug, index) {
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index, 1));
            },
            edit(index) {
                this.form.name = this.categories[index].name
                this.editSlug = this.categories[index].slug
                this.categories.splice(index, 1)
            }
        }
    }
</script>

<style>

</style>