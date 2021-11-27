<template>
  <v-card
  elevation="2"
  outlined
  shaped
>
<v-card-title primary-title>
    <div>
        {{question.title}}
    </div>
</v-card-title>
<v-card-subtitle>
    <div>
        Posted By {{question.user}}<br />
        {{question.created_at}}
        </div>
</v-card-subtitle>
<v-card-text>
    <div>{{question.body}}</div>
</v-card-text>
<v-card-actions>
    <router-link :to="question.path">
    <div><v-btn text color="blue">View Post</v-btn></div>
    </router-link>
</v-card-actions>
</v-card>
</template>

<script>
export default {
    props:['question']

}
</script>

<style>

</style>