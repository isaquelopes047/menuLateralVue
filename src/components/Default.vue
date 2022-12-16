<template>
    <div class="main">
  
      <div :style="[menuLateral]">
        <MenuLateral :rotas="routes" v-on:reduzirMenu="reduzirMenu">
            <div class="containerImg" v-show="mostrarUser">
            <!-- <div :style="[containerImg]"> -->
                <div class="containerImgFoto">
                    <img src="@/assets/logo.png" alt="" class="imgUser">
                </div>
            </div>

            <!-- Imagem do meu reduzido, iniciando com v-show false e mudando o estado quando o menu for reduzido -->
            <img src="@/assets/logo.png" alt="" class="imgUserMenor" v-show="imagemMenorMenu" >
        </MenuLateral>
      </div>
  
      <router-view>
      </router-view>
  
    </div>
  </template>
  
  <script>
  import MenuLateral from './shared/MenuLateral.vue'
  import { routes } from '../router/routes'
  
  export default {
    name: 'DefaultVue',
    data(){
      return {
        routes,
        /* Definindo o estilo por data() */
        menuLateral: {
            width: '250px',
            height: '100vh',
            backgroundColor: '#1e293b',
            overflow: 'hidden'
        },
        mostrarUser: true,
        imagemMenorMenu: false
      }
    },
    methods: {

    /* Criamos um metodo para alterar os estilos CSS */
      reduzirMenu(){
        let minimo = '45px'
        let maximo = '250px'
  
        if(this.menuLateral.width == minimo){

            this.menuLateral.width = maximo 
            this.mostrarUser = true
            this.imagemMenorMenu = false

        } else {

            this.menuLateral.width = minimo
            this.mostrarUser = false
            this.imagemMenorMenu = true

        }
      }
    },
    components: {
      MenuLateral
    }
  }
  </script>
  
  <style>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        width: 100vw;
        height: 100vh;
        display: flex;
    }
    .imgUser{
        width: 80px;
    }
    .containerImgFoto{
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .containerImg{
        width: '100%';
        height: '120px';
        background-color: '#496585';
    }
    .imgUserMenor{
        width: 30px;
        margin-top: 30px;
    }
  </style>