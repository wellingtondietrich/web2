<template>
    <v-card>
        <v-card-title class="py-0" primary-title>
            <v-card-text class="title" v-text="`Historico de transação`" /> 
        </v-card-title>


        <v-list two-line class="px-0 py-0">

            <v-divider />

            <v-list-tile avatar class="px-0 py-0">

                <v-list-tile-avatar color="green" class="px-0 py-0">
                    <span class="white--text title" v-text="`C`"></span>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>Receita principal</v-list-tile-title>
                    <v-list-tile-sub-title>R$90.00</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider />

            <v-list-tile avatar class="px-0 py-0">

                <v-list-tile-avatar color="red" class="px-0 py-0">
                    <span class="white--text title" v-text="`D`"></span>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>Alimentação</v-list-tile-title>
                    <v-list-tile-sub-title>R$45.00</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            

            <v-divider />
        </v-list>
    </v-card>
</template>

<script>
export default {};
</script>
