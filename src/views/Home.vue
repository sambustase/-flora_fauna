<!-- Pagina Principal de la pagina web -->

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h1>Flora & Fauna</h1>
                <p>Chile, con su diversidad de ecosistemas, alberga una flora y fauna únicas en el mundo. 
                Desde los desiertos del norte hasta los bosques del sur, nuestro país es hogar de especies 
                fascinantes que reflejan su riqueza natural. Acompáñanos a descubrir algunas de las plantas
                y animales más emblemáticos de Chile, un verdadero tesoro de biodiversidad.</p>
            </div>
            <div class="col-md-6">
            <img class="imagen" src="../assets/img/araucaria.jpg" alt="araucaria">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style scoped>
.container{
    margin-left: 50px;
    height: 100%;
    width: 100%;
}
.imagen{
    width: 400px;
    height: 300px;
}
</style>