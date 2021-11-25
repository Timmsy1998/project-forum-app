<template>
    <v-toolbar dense>

      <v-toolbar-title>James Timms Forum App</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <router-link
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      :icon="item.icon"
      v-if="item.show">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon>
            <v-icon
            v-bind="attrs"
            v-on="on">
            {{item.icon}}
            </v-icon>
          </v-btn>
        </template>
        <span>{{item.title}}</span>
      </v-tooltip>
      </router-link>

    </v-toolbar>
</template>

<script>

export default {
  data(){
    return {
      items: [
        {title : 'Forum', to:'/forum', icon:'mdi-forum', show:true},
        {title : 'Login', to:'/login', icon:'mdi-login', show: !User.loggedIn()},
        {title : 'Logout', to:'/logout', icon:'mdi-logout', show: User.loggedIn()},
        {title : 'Quick Post', to:'/ask', icon:'mdi-chat-plus', show: User.loggedIn()},
        {title : 'View All Categories', to:'/category', icon:'mdi-shape', show: User.loggedIn()},
      ]
    }
  },
  created(){
    EventBus.$on('logout', () => {
      User.logout()
    })
  }

}
</script>


<style>

</style>