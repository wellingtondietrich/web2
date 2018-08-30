<template>
    <v-layout row wrap>
        <v-flex xs12 class="mt-4">
            <v-avatar
            :size="200"
            color="grey lighten-4"
            >
            <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" >
            </v-avatar>
        </v-flex>

        <v-flex xs12 class="mt-4">
            <span class="title">Aluno de teste</span>
        </v-flex>

        <v-flex xs12 class="mt-4">
            
            <v-btn round color="error" @click="$router.push('/')">
                <v-icon>power_settings_new</v-icon>                
                <span>Sair</span>
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    
}
</script>
