<template>
    <div>
        <router-link :to="{ name: 'get.index'}">Get</router-link>
        <router-link v-if="!token" :to="{ name: 'user.login'}">Login</router-link>
        <router-link v-if="token" :to="{ name: 'user.personal'}">Personal</router-link>
        <router-link v-if="!token" :to="{ name: 'user.registration'}">Registration</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",

    data() {
        return {
            token: null
        }
    },

    mounted() {
        // Проекрка на наличие токена
        this.getToken()
    },

    // updated - если в меню что-то поменяло (например, выолнена авторизация), тогда обновляем меню без перезагрузки
    updated() {
        this.getToken()
    },

    methods: {

        // Проекрка на наличие токена
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },

        logout() {
            axios.post( '/logout')
            .then( res => {

                // Удаляем Токен при выходе из аккаунта
                localStorage.removeItem('x_xsrf_token')
                this.$router.push({name: 'user.login'})
            })
        }
    }
}
</script>

<style scoped>

</style>
