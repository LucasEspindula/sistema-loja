<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif
  }

  .container {
    width: 100%;
    max-width: 960px;
    height: 100%;
    display: flex;
    margin: auto;
    flex-wrap: wrap;
  } 

  .row { 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }

  .col-md-1{
      width: calc(960px/12 * 1);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-2{
      width: calc(960px/12 * 2);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-3{
      width: calc(960px/12 * 3);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-4{
      width: calc(960px/12 * 4);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-5{
      width: calc(960px/12 * 5);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-6{
      width: calc(960px/12 * 6);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-7{
      width: calc(960px/12 * 7);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-8{
      width: calc(960px/12 * 8);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-9{
      width: calc(960px/12 * 9);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-10{
      width: calc(960px/12 * 10);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-11{
      width: calc(960px/12 * 11);
      box-sizing: border-box;
      padding: 0px 10px
  }

  .col-md-12{
      width: calc(960px/12 * 12);
      box-sizing: border-box;
      padding: 0px 10px
  }
</style>
