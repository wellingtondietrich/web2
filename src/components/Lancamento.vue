<template>
    <v-card height="100%" >
        <v-card-title primary-title>
            <div class="headline">{{type}}</div>
        </v-card-title>
        <v-divider />
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field
                        name="name"
                        label="label"
                        id="id"
                    />
                </v-flex>

                <v-flex xs12>
                    <v-text-field
                        name="name"
                        label="label"
                        id="id"
                    />
                </v-flex>

                <v-flex xs12>
                    <v-text-field
                        name="name"
                        label="label"
                        id="id"
                    />
                </v-flex>
            </v-layout>            
        </v-container>
        <v-divider />
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="success" @click="``">Adicionar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        type:{
            type:String
        }
    }
}
</script>
