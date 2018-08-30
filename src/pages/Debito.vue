<template>
    <app-lancamento :type="1" title="Débito" name="débito" :categorias='categorias' @done="() => {}"/>
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
                'Alimentação',
                'Educação',
                'Transporte',
                'Saúde'
            ]
        }
    }
}
</script>