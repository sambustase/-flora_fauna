<template>
    <div class="container">
        <h1 class="d-flex justify-content-center my-5">Flora y Fauna</h1>

        <div v-if="especieSeleccionada">
            <div class="card mb-5" style="width: 18rem;">
                <img :src="especieSeleccionada.imagen" class="imagen" alt="especie">
                <div class="card-body">
                    <h2>{{ especieSeleccionada.nombre }}</h2>
                    <p><strong>Tipo: </strong>{{ especieSeleccionada.tipo }}</p>
                    <p><strong>Ubicacion: </strong>{{ especieSeleccionada.ubicacion }}</p>
                    <p><strong>Descripcion: </strong>{{ especieSeleccionada.descripcion }}</p>
                    <p><strong>Estado de Conservacion: </strong>{{ especieSeleccionada.estadoConservacion }}</p>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button @click="volverAtras" type="button" class="btn btn-primary">Volver</button>
            </div>
        </div>
<!-- Cards de las espcies según API db.jason -->
    <div class="row" v-else>
            <div class="col-md-3 justify-content-space-between" v-for ="especie in especies" :key="especie.id">
                <div class="card mb-5" @click="seleccionarEspecie(especie)">
                    <img :src="especie.imagen" class="card-img-top imagen">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Nombre: </strong>{{ especie.nombre }}</h5>
                        <p class="card-text"><strong>Tipo: </strong>{{ especie.tipo }}</p>
                        <p class="card-text"><strong>Ubicacion: </strong>{{ especie.ubicacion }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: 'FloraFauna',
        data(){
            return{
                especieSeleccionada: null,
            };
        },

    computed:{
        ...mapState({
            especies: state => state.floraFauna.especies,
        }),
    },

    methods: {
        ...mapActions(["fetchFloraFauna"]),
        seleccionarEspecie(especie){
            this.especieSeleccionada = especie;
        },
        volverAtras(){
            this.especieSeleccionada = null
        }
    },
    mounted(){
        this.fetchFloraFauna()
        console.log(this.especies);
    }
}
</script>

<style scoped>
.imagen{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}
.card{
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 20px;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.col-md-3{
    margin-bottom: 20px;
}
</style>