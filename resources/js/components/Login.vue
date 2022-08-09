<template>
    <div>
        <input v-model="email" type="email" placeholder="email" class="form-control">
        <input v-model="password" type="password" placeholder="password" class="form-control">
        <input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        login() {
            // Данный axios в документации к sanctum, включакет наш axios
            axios.get('/sanctum/csrf-cookie').then(response => {

                // Наш axios
                axios.post('/login', {email: this.email, password: this.password})
                .then( r => {
                    console.log(r);
                })
                 // Ловим ошибку в console.log при неправильном вводе пароля
                .catch( err => {
                    console.log(err.response);
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
