<template>
    <app-lancamento :type="0" title="Crédito" name="crédito" :categorias='categorias' @add="() => {}"/>
</template>

<script>
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
    }
}
</script>