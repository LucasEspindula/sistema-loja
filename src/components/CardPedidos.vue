<template>
  <b-row align-h="center">
    <b-col cols="5">
      <b-card v-for="pedidos in pedidos" :key="pedidos.id">
        <b-card-text> <b>Código:</b> {{ pedidos._id }} </b-card-text>

        <b-card-text>
          <b>CPF Cliente:</b> {{ pedidos.clienteCPF }}
        </b-card-text>

        <b-card-text>
          <b>Valor unitário:</b> {{ pedidos.valorUnitario }}
        </b-card-text>

        <b-card-text>
          <b>Valor total:</b> {{ pedidos.ValorTotal }}
        </b-card-text>

        <b-card-text> <b>Quantidade:</b> {{ pedidos.quantidade }} </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "CardPedidos",

  data: function() {
    return {
      pedidos: [],
    };
  },

  methods: {
    getPedidos: async function() {
      const result = await fetch("http://localhost:3000/pedidos")
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.pedidos = result;
        console.log(this.pedidos);
      }
    },
  },

  created: function() {
    this.getPedidos();
  },
};
</script>

<style></style>
