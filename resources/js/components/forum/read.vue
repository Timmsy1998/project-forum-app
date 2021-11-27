<template>
  <div v-if="question">
    <edit-post v-if="editing" :data=question></edit-post>
    <show-question v-else :data=question>
    </show-question>
  </div>
</template>

<script>
  import ShowQuestion from './ShowQuestion'
  import EditPost from './editPost'
  export default {
    components: {
      ShowQuestion,
      EditPost
    },
    data() {
      return {
        question: null,
        editing: false,
      }
    },
    created() {
      this.listen()
      this.getQuestion()
    },
    methods: {
      listen() {
        EventBus.$on('startEditing', () => {
          this.editing = true
        })

        EventBus.$on('cancelEditing', () => {
          this.editing = false
        })
      },
      getQuestion() {
        axios.get(`/api/question/${this.$route.params.slug}`)
          .then(res => this.question = res.data.data)
      }
    }
  }
</script>

<style>

</style>