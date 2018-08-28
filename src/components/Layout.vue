<template>
    <v-app>
        
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-title @click="$router.push('/')">Application</v-toolbar-title>
        </v-toolbar>

        <v-card height="100%" flat>
        
            <div class="headline text-xs-center">
                <v-content>
                    <v-container fluid>
                        <v-layout align-center justify-center>
                            <v-flex xs12>
                                <router-view></router-view>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-content>
            </div>

            <v-bottom-nav
                :active.sync="bottomNav"
                :value="true"
                absolute
                color="transparent"
            >
                <v-btn
                    color="indigo"
                    flat
                    value="debito"
                    @click="$router.push('debito')"
                >
                    <span>Debito</span>
                    <v-icon>sentiment_dissatisfied</v-icon>
                </v-btn>

                <v-btn
                    color="indigo"
                    flat
                    value="credito"
                    @click="$router.push('credito')"
                >
                    <span>Credito</span>
                    <v-icon>monetization_on</v-icon>
                </v-btn>

                <v-btn
                    color="indigo"
                    flat
                    value="relatorio"
                    @click="$router.push('relatorio')"
                >
                    <span>Relatorio</span>
                    <v-icon>class</v-icon>
                </v-btn>
            </v-bottom-nav>
        </v-card>

    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>