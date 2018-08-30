<template>
  <v-parallax height="950" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
  	  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.mes }}</td>
      <td class="text-xs-left">{{ props.item.total }}</td>
      <td class="text-xs-left">{{ props.item.saldo }}</td>
      <td class="text-xs-left">{{ props.item.economia }}</td>
    </template>
  </v-data-table>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Meses',
            align: 'center',
            sortable: false,
            value: 'mes'
          },
          { text: 'Total', value: 'total' },
          { text: 'Saldo', value: 'saldo' },
          { text: 'Economia (%)', value: 'economia' }
        ],
        desserts: [
          {
            value: false,
            mes: 'Janeiro',
            total: 'R$ 159,00',
            saldo: 4.0,
            economia: '1%'
          },
          {
            value: false,
            mes: 'Fevereiro',
            total: 'R$ 237,00',
            saldo: 4.3,
            economia: '1%'
          },
          {
            value: false,
            mes: 'Março',
            total: 'R$ 262,00',
            saldo: 6.0,
            economia: '7%'
          },
          {
            value: false,
            mes: 'Abril',
            total: 'R$ 305,00',
            saldo: 4.3,
            economia: '8%'
          },
          {
            value: false,
            mes: 'Maio',
            total: 'R$ 356,00',
            saldo: 3.9,
            economia: '16%'
          },
          {
            value: false,
            mes: 'Junho',
            total: 'R$ 375,00',
            saldo: 0.0,
            economia: '0%'
          },
          {
            value: false,
            mes: 'Julho',
            total: 'R$ 392,00',
            saldo: 0,
            economia: '2%'
          },
          {
            value: false,
            mes: 'Agosto',
            total: 'R$ 408,00',
            saldo: 6.5,
            economia: '45%'
          },
          {
            value: false,
            mes: 'Setembro',
            total: 'R$ 452,00',
            saldo: 4.9,
            economia: '22%'
          }
        ]
      }
    }
  }
</script>
