<template>
  <div class="produto-detalhe">
    <Header />
    <main>
      <Detalhe />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Detalhe from "../components/Detalhe.vue";
import Footer from "../components/Footer.vue";


export default {
  name : "ProdutoDetalhe",
  components : {
    Header,
    Detalhe,
    Footer,
  }
}
</script>
<style>
  
</style>