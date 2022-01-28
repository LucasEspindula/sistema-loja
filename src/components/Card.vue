<template>
  <div class="card">
    <img :src="img" alt="">
    <h3>{{title}}</h3>
    <p>Preço: R$ {{price}}</p>
    <button><router-link :to="{name: 'produto-detalhe', params: { id: _id }}" >Pedido</router-link></button>
  </div>
</template>
<script>
export default {
  name : 'Card',
  props : {
    _id: String,
    title: String,
    price: String,
    img : String
  }
}
</script>
<style>
  .card {
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding : 30px 20px;
    margin : 20px 10px;
    display: flex;
    flex-direction: column;
    align-items : center;
  }

  .card h3{
    font-size : 18px;
    font-weight : bold;
    color : #000000;
    margin-bottom: 5px;
  }

  .card p{
    font-size : 14px;
    color : #000000;
  }

  .card img{
    max-width: 80%;
    height: 180px;
  }

  .card button {
    width: 170px;
    height: 40px;
    border-radius: 6px;
    background-color: #ae382b;
    color: #f5a022;
    border: none;
    font-weight: bold;
  }

  .card button a{
    color: inherit;
    text-decoration: none;
  }
</style>