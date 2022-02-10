<template>
  <section class="detalhe">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Detalhe do Produto</h2>
          <img :src="produto.img" alt="Red dead" />
        </div>
        <div class="col-md-9">
          <h2>{{ produto.title }}</h2>
          <p>{{ produto.price }}</p>
        </div>
        <div class="col-md-3">
          <div class="detalhe__box-price">
            <p>Quantidade</p>
            <input @input="toCalculate" type="number" v-model="quantity" />
          </div>
        </div>
        <div class="col-md-12">
          <hr />
          <h3>Descrição:</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged
          </p>
          <h4>
            Total : {{ quantity }} * {{ produto.price }} =
            {{ total && total.toString().replace(".", ",") }}
          </h4>
        </div>
        <div class="col-md-12">
          <button @click="fazerPedido()">
            Fazer Pedido
          </button>
        </div>

        <div class="col-md-12" v-if="realizarPedido">
          <hr />
          <h2>Novo Pedido</h2>
          <div class="area_input_cpf">
            <label>CPF Cliente:</label>
            <input
              type="text"
              name="cpf-cliente"
              v-model="cpfCliente"
              placeholder="Informe o cpf do cliente..."
            />
            <input
              type="button"
              value="Buscar"
              class="btn-cpf"
              @click="getClienteByCPF()"
            />
          </div>
          <div v-if="buscarCpf">
            <p>
              Nome Completo: {{ clienteEncontrado.nome }}
              {{ clienteEncontrado.sobrenome }}
            </p>
            <p>CPF: {{ clienteEncontrado.CPF }}</p>
            <p>Data de Nascimento: {{ clienteEncontrado.dataNascimento }}</p>
            <hr />
            <button @click="salvarPedido()">Salvar pedido</button>
          </div>
        </div>

        <div style="color: green" v-if="mostrarMassage">
          {{ massage }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Detalhe",

  data: function() {
    return {
      produto: [],
      clienteEncontrado: [],
      quantity: 1,
      preco: 0,
      total: null,
      cpfCliente: "",
      realizarPedido: false,
      buscarCpf: false,

      mostrarMassage: false,
      massage: "",
    };
  },
  methods: {
    getProdutosById: async function() {
      const result = await fetch(
        "http://localhost:3000/produtos/" + this.$route.params.id,
      )
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.produto = result;
      }
    },

    getClienteByCPF: async function() {
      this.buscarCpf = !this.buscarCpf;

      const result = await fetch(
        "http://localhost:3000/clientes/busca/" + this.cpfCliente,
      )
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.clienteEncontrado = result;
      }
    },

    salvarPedido: async function() {
      this.realizarPedido = !this.realizarPedido;
      const novoPedido = {
        produtoId: this.produto._id,
        ValorTotal: this.total,
        valorUnitario: this.produto.price,
        quantidade: this.quantity,
        clienteCPF: this.clienteEncontrado.CPF,
      };

      const result = await fetch("http://localhost:3000/pedidos", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        method: "POST",
        body: JSON.stringify(novoPedido),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            massage: error,
          };
        });

      if (!result.error) {
        (this.mostrarMassage = true),
          (this.massage = "Pedido cadastrado com sucesso!");
      }
    },

    fazerPedido: function() {
      this.realizarPedido = !this.realizarPedido;
      this.mostrarMassage = false;
      this.buscarCpf = false;
      this.cpfCliente = "";
    },

    toCalculate: function() {
      if (this.produto.price) {
        if (this.quantity == 1) {
          this.total = this.produto.price;
        }

        this.preco = parseFloat(this.produto.price.replace(",", "."));
        const total = this.preco * this.quantity;
        this.total = total.toFixed(2).replace(".", ",");

        if (this.quantity < 0) {
          return (this.quantity = 0);
        }
      }
    },
  },

  created: function() {
    this.getProdutosById();
  },

  updated: function() {
    this.toCalculate();
  },
};
</script>
<style>
.detalhe {
  padding: 50px 0px;
}

.detalhe img {
  margin: 20px auto;
  display: block;
}

.detalhe__box-price {
  text-align: right;
  font-weight: bold;
}

.detalhe input {
  width: 50px;
  height: 30px;
  border-radius: 4px;
  padding: 0px 8px;
}

.detalhe button {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: #ae382b;
  color: #f5a022;
  border: none;
  font-weight: bold;
  display: block;
  margin: 30px auto;
  cursor: pointer;
}

button:hover {
  background-color: #f5a022;
  color: #ae382b;
}

.area_input_cpf {
  display: flex;
  align-items: center;
}

.area_input_cpf input {
  width: 170px;
  border-radius: 6px 0 0 6px;
}

.area_input_cpf input[type="button"] {
  width: 85px;
  height: 34px;
  background-color: #ae382b;
  color: #f5a022;
  border: none;
  font-weight: bold;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}

.area_input_cpf input[type="button"]:hover {
  background-color: #f5a022;
  color: #ae382b;
}

.area_input_cpf label {
  margin: 0 20px 0 0;
}
</style>
