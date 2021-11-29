<template>
  <div>
      <v-md-editor v-model="reply.reply" height="400px"></v-md-editor>
      <v-spacer></v-spacer>
                      <v-card-actions>
                <v-btn text color="green" @click="update">Save Edit</v-btn>
                <v-btn text color="red" @click="cancel">Cancel Edit</v-btn>
            </v-card-actions>
  </div>
</template>

<script>
export default {
    props:['reply'],
    methods:{
        cancel(reply){
            EventBus.$emit('cancelEditing',reply);


        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            .then(res => this.cancel(this.reply.reply))
        }
    }

}
</script>

<style>

</style>