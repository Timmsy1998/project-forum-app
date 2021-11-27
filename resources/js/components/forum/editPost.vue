<template>
    <v-card class="mt-4" elevation="2" outlined shaped>
        <v-container fluid>
            <v-card-title>
                Editing Post - {{data.title}}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-form @submit.prevent="update">
                <v-md-editor v-model="form.body" height="400px"></v-md-editor>
                <v-card-actions>
                    <v-btn text color="green" type="submit">Save Post</v-btn>
                    <v-btn text color="red" @click="cancel">Cancel Edit</v-btn>
                </v-card-actions>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                form: {
                    title: null,
                    body: '',
                }
            }
        },
        methods: {
            cancel() {
                EventBus.$emit('cancelEditing')
            },
            update() {
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                    .then(res => this.cancel())
            }
        },
        created() {
            this.form = this.data
        }
    }
</script>

<style>

</style>