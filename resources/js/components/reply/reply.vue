<template>
    <v-card class="mt-4" elevation="2" outlined shaped>
        <v-container fluid>
            <v-card-title>
                {{data.user}}
            </v-card-title>
            <v-card-subtitle>
                Said {{data.created_at}}
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <edit-reply v-if="editing" :reply=data></edit-reply>
            <v-card-text v-else v-html="markedHtml"></v-card-text>
            <v-divider></v-divider>
            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn text color="green" @click="edit">Edit Reply</v-btn>
                    <v-btn text color="red" @click="destroy">Delete Reply</v-btn>
                </v-card-actions>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import EditReply from './editReply'
    import {
        marked
    } from 'marked';
    export default {
        props: ['data', 'index'],
        components: {
            EditReply
        },
        data() {
            return {
                editing: false,
                beforeEditReplyBody: ''
            }
        },
        computed: {
            own() {
                return User.own(this.data.user_id)
            },
            markedHtml() {
                return marked.parse(this.data.reply);
            },
        },
        created() {
            this.listen()
        },
        methods: {
            destroy() {
                EventBus.$emit('deleteReply', this.index)
            },
            edit() {
                this.editing = true,
                    this.beforeEditReplyBody = this.data.reply
            },
            listen() {
                EventBus.$on('cancelEditing', (reply) => {
                    this.editing = false
                    if (reply !== this.data.reply) {
                        this.data.reply = this.beforeEditReplyBody
                        this.beforeEditReplyBody = ''
                    }
                })
            }
        }
    }
</script>

<style>

</style>