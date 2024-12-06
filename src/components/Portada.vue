<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand text-light" to="/home">FloraFauna</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/floraFauna">Flora & Fauna</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-light" to="/contacto">Contacto</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Portada'
}
</script>
<style scoped>
.navbar{
    width: 100%;
}
</style>

