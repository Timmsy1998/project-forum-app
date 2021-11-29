<template>
  <v-card>
      <v-toolbar color = "cyan" dark dense class="mt-4" elevation="2">
          <v-toolbar-title>Forum Categories</v-toolbar-title>
      </v-toolbar>

      <v-list>
          <v-list-item v-for="category in categories" :key="category.id">
              <v-card-actions>
                  <v-btn text color="blue" @click="filterCategory(category.id)">{{category.name}}</v-btn>
              </v-card-actions>
          </v-list-item>
      </v-list>
  </v-card>
</template>

<script>
export default {
    data(){
        return {
            categories:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data.sort((a, b) => a.name.localeCompare(b.name)))
    },
    methods: {
        filterCategory(id){
            EventBus.$emit('filterCategory', id);
        }
    }

}
</script>

<style>

</style>