<template>
  <v-flex xs12>
    <v-container grid-list-xs ma-0 pa-0>
      <v-layout row wrap>
        <v-flex xs12 class="mb-3">
          <v-card color="green" class="white--text">
            <v-layout>
              <v-flex xs4>
                <v-container grid-list-xs>
                  <v-layout row wrap align-center>
                    <v-flex xs12>
                      <v-icon size="75" >attach_money</v-icon>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>

              <v-divider vertical />

              <v-flex xs8>
                <v-card-title primary-title>
                  <div>
                      <div class="headline">Cedito corrente</div>
                      <div class="subheading">R$ 90.00</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs12 class="mb-3">
          <v-card color="red" class="white--text">
            <v-layout>
              <v-flex xs4>
                <v-container grid-list-xs>
                  <v-layout row wrap align-center>
                    <v-flex xs12>
                      <v-icon size="75" >money_off</v-icon>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>

              <v-divider vertical />

              <v-flex xs8>
                <v-card-title primary-title>
                  <div>
                      <div class="headline">Debito corrente</div>
                      <div class="subheading">R$ 45.00</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card color="blue" class="white--text">
            <v-layout>
              <v-flex xs4>
                <v-container grid-list-xs>
                  <v-layout row wrap align-center>
                    <v-flex xs12>
                      <v-icon size="75" >monetization_on</v-icon>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>

              <v-divider vertical />

              <v-flex xs8>
                <v-card-title primary-title>
                  <div>
                      <div class="headline" >Valor disponível</div>
                      <div class="subheading">R$ 45.00</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </v-flex>

</template>

<script>
  export default {
    
  }
</script>
