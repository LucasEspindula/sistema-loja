import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import ProdutoDetalhe from "./pages/ProdutoDetalhe.vue";
import Pedidos from "./pages/Pedidos.vue"

const routes = [
  { path: "/", name: "home", component : Home },
  { path: "/produto-detalhe/:id", name: "produto-detalhe", component : ProdutoDetalhe }, 
  { path: "/pedidos", name: "pedidos", component : Pedidos }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router;