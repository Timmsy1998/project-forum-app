<template>
    <v-card class="mt-4" elevation="2" outlined shaped>
        <v-container fluid>
            <v-card-title>
                {{data.title}}
            </v-card-title>
            <v-card-subtitle>
                Posted By {{data.user}} {{data.created_at}}
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-text v-html="markedHtml"></v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions v-if="own">
                <v-btn text color="green" @click="edit">Edit Post</v-btn>
                <v-btn text color="red" @click="destroy">Delete Post</v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
    import {
        marked
    } from 'marked';
    export default {
        props: ['data'],
        data() {
            return {
                own: User.own(this.data.user_id)
            }
        },
        computed: {
            markedHtml() {
                return marked.parse(this.data.body);
            }
        },
        methods: {
            destroy() {
                axios.delete(`/api/question/${this.data.slug}`)
                    .then(res => this.$router.push('/forum'))
                    .catch(error => console.log(error.response.data))
            },
            edit() {
                EventBus.$emit('startEditing')
            }
        }
    }
</script>

<style>

</style>