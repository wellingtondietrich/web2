<template>
    <app-lancamento :type="0" title="Crédito" name="crédito" :categorias='categorias' @add="addCredito"/>
</template>

<script>
import { mapActions } from 'vuex'

import Lancamento from '../components/Lancamento'

export default {
    components:{
        appLancamento : Lancamento
    },
    data(){
        return {
            categorias:[
                'Receita principal',
                'Receita secundária',
                'Receita com sobras de materiais',
                'Receitas não operacionais/não recorrentes'
            ]
        }
    },
    methods:{
        ...mapActions(['addCredit']),

        addCredito(credit){
            this.addCredit(credit)
        }
    }
}
</script>