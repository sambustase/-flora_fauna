<!-- Formulario de contacto
 -->
<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="container d-flex flex-column align-items-center">
            <div class="mb-3 w-100">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo Electronico">
            </div>
            <div class="mb-3 w-100">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Mensaje"></textarea>
            </div>
            <div class="w-100 d-flex justify-content-end">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Contacto'
}
</script>
<style scoped>
.container{
    width: 600px;
}
</style>