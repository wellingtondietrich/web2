<template>
    <v-app pa-0 ma-0>

        <v-toolbar color="indigo" dark fixed app pa-0 ma-0>
            <v-spacer />
            <v-toolbar-title class="pa-0 ma-0" @click="$router.push('/dashboard')">Simples - Sistema Financeiro</v-toolbar-title>
            <v-spacer />
        </v-toolbar>

        <v-card height="100%" flat>
        
            <div class="headline text-xs-center">
                <v-content>
                    <v-container fluid>
                        <v-layout align-center justify-center>
                            <v-flex xs12>
                                <router-view />
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
                    value="dashboard"
                    @click="$router.push('/dashboard')"
                >
                    <span>Dashboard</span>
                    <v-icon>dashboard</v-icon>
                </v-btn>

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
                    <span>Historico</span>
                    <v-icon>class</v-icon>
                </v-btn>

                <v-btn
                    color="indigo"
                    flat
                    value="perfil"
                    @click="$router.push('perfil')"
                >
                    <span>Perfil</span>
                    <v-icon>person</v-icon>
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