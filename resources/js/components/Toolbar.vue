<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>James Timms</v-toolbar-title>

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
      <v-btn icon>
        <v-icon                  
        v-bind="attrs"
          v-on="on">mdi-account</v-icon>
      </v-btn>
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
  </v-card>
</template>

<script>

export default {

}
</script>


<style>

</style>