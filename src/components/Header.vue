<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="logo">
            <img src="../assets/logo.png" alt="Logo" class="logo__img">
          </div>
        </div>
        <div class="col-md-6 header__right">
          <nav class="menu">
            <ul>
              <li>Clientes</li>
              <li>Pedidos</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name : "Header"
}
</script>
<style>
  .header {
    background-color : #ae382b;
    height : 80px;
    width : 100%;
    color: white;
  }

  .header__right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .logo{
    width: 250px;
    padding: 0px;
    margin-top: 15px;
  }

  .logo__img{
    width: 100%;
  }

  .menu ul{
    list-style: none;
    padding: 0;
    margin : 0;
    color: #e2e2e2;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  .menu ul li{
    padding: 4px 14px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  .menu ul li:not(:last-child):after{
    content: "";
    display: inline-block;
    width: 1px;
    background-color: #e2e2e2;
    height: 10px;
    margin-left: 10px;
  }
</style>
