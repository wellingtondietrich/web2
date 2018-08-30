<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              
              <v-toolbar dark color="primary">
                <v-toolbar-title>Entrar</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Email" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="Senha" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn flat color="default" @click="$router.push('/cadastro')">Cadastrar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="$router.push('/dashboard')">Entrar</v-btn>
              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    
}
</script>

<style >
#inspire{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7abcff+0,228cf7+52,4096ee+100 */
  background: #7abcff; /* Old browsers */
  background: -moz-linear-gradient(top, #7abcff 0%, #228cf7 52%, #4096ee 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #7abcff 0%,#228cf7 52%,#4096ee 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #7abcff 0%,#228cf7 52%,#4096ee 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#4096ee',GradientType=0 ); /* IE6-9 */
}
</style>
