<template>
    <v-card height="100%" >
        <v-card-title primary-title>
            <div class="headline">{{title}}</div>
        </v-card-title>
        <v-divider />
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field
                        :label="`Valor do ${name}`"
                        type="number"
                        prepend-icon="attach_money"
                    />
                </v-flex>

                <v-flex xs12>
                    <v-text-field
                        label="Observação"
                        prepend-icon="bookmark"
                    />
                </v-flex>

                <v-flex xs12>
                    <v-select
                        :items="categorias"
                        label="Categorias"
                        prepend-icon="format_list_bulleted"
                    />
                </v-flex>

                <v-flex xs12>
                    <v-menu
                        ref="menu"
                        :close-on-content-click="false"
                        v-model="menu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                    <v-text-field
                        slot="activator"
                        v-model="obj.date"
                        :label="`Data do ${type==0?'provento':'desconto'}`"
                        prepend-icon="event"
                        readonly
                    />
                    <v-date-picker
                        locale="pt-br"
                        ref="picker"
                        v-model="obj.date"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                    />
                    </v-menu>
                </v-flex>
            </v-layout>            
        </v-container>
        <v-divider />
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="success" @click="done()">Adicionar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        type:Number,
        title:String,
        name:String,
        categorias:Array
    }, 
    data: () => ({
      date: null,
      menu: false,
      obj:{
          value: 0,
          obs:'',
          categoria: '',
          data: new Date()
      }
    }),
    watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },

      done(){
          
        this.obj.type = this.type
        
        this.$emit('add',this.obj)
        
        this.obj = {
            value: 0,            
            obs:'',
            categoria: '',
            data: new Date()
        }

        this.$router.push(`/dashboard`)

      }
    }
}
</script>
