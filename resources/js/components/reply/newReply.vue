<template>
  <div>
      <v-md-editor v-model="body" height="400px"></v-md-editor>
      <v-spacer></v-spacer>
      <v-btn text color="green" @click="submit">Send Reply</v-btn>
  </div>
</template>

<script>
export default {
    props:['questionSlug'],
    data(){
        return {
            body:'',
        }
    },
    methods:{
        submit(){
            axios.post(`/api/question/${this.questionSlug}/reply`, {body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply', res.data.reply)
                window.scrollTo(0,0)
            })
        }
    }

}
</script>

<style>

</style>