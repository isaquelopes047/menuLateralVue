<template>
    <!-- Nav menu com todas as rotas usando laço for cada rota será um item do menu -->
    <nav>
        <ul>
            <slot>

            </slot>
            <!-- Button para reduzir o menu lateral, passando a chamada da função para o component pai -->
            <button @click="$emit('reduzirMenu')">
                <fa icon="bars" class="icons"/>
            </button>

            <li v-for="rota in rotas" :key="rota.id">
                <router-link :to="rota.path ? rota.path : '/'">

                    <!-- Defino o icone do menu no arquivo de rota -->
                    <fa :icon="rota.icone" class="icons"/>
                    <p>{{rota.titulo}}</p>
                    
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MenuLateral',
    props: ['rotas'],
})
</script>

<style scoped>
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
    } 
    li{
        width: 90%;
        height: 50px;
        background-color: transparent;
        margin-top: 10px;
        display: flex;
        align-items: center;
        transition: 0.3s;
    }
    li:hover{
        background-color: #41b783;
        border-radius: 5px;
        transition: 0.3s;
    }
    a{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        font-style: none;
        margin-left: 10px;
    }
    p{
        margin-left: 14px; 
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
        font-size: 18px;
    }
    button{
        width: 35px;
        height: 35px;
        background-color: rgba(255, 255, 255, 0.096);
        border: none;
        margin: 15px 0 0 0;
        cursor: pointer;
        border-radius: 5px;
    }  
    .icons{
        color: rgb(255, 255, 255);
        font-size: 20px;
    }
</style>
