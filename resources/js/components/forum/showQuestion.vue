<template>
    <v-card
  elevation="2"
  outlined
  shaped
>
<v-container fluid>
<v-card-title>
    {{data.title}}
</v-card-title>
<v-card-subtitle>
    Posted By {{data.user}} {{data.created_at}}
</v-card-subtitle>
<v-spacer></v-spacer>
<v-card-text v-html="data.body"></v-card-text>
</v-container>
    </v-card>
</template>

<script>
import marked from 'marked';

export default {
    props:['data'],
    computed:{
        body(){
            return marked.parse(this.data.body);
        }
    }

}
</script>

<style>

</style>