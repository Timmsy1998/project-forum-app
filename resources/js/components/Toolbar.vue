<template>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to ="/forum">
      <v-toolbar-title>View The Forum</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn icon>
        <v-icon
                  v-bind="attrs"
          v-on="on">mdi-magnify</v-icon>
      </v-btn>
      </template>
      <span>Search The Forum</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
          <router-link to="/login">
      <v-btn icon>
        <v-icon                  
        v-bind="attrs"
          v-on="on">mdi-account</v-icon>
      </v-btn>
          </router-link>
            </template>
      <span>Login</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn icon>
        <v-icon
         v-bind="attrs"
          v-on="on"
        >mdi-dots-vertical</v-icon>
      </v-btn>
                  </template>
      <span>View All Categories</span>
    </v-tooltip>

    </v-toolbar>
</template>

<script>

export default {

}
</script>


<style>

</style>