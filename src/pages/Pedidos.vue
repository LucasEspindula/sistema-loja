<template>
  <div class="">
    <Header />
    <main>
      <CardPedidos />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import CardPedidos from "../components/CardPedidos.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Pedidos",
  components: {
    Header,
    CardPedidos,
    Footer,
  },
};
</script>

<style></style>
