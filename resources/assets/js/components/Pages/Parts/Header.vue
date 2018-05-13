<template>
    <section class = "header">
        <router-link :to="{ name: 'home'}">
            <img class ="logo" src="/images/logo.png" alt="">
        </router-link>
        <div class="header__buttons">
            <router-link v-if="$store.state.authState == 'guest'" class="btn btn-outline-dark" :to="{ name: 'login'}">
                Войти
            </router-link>
            <router-link v-if="$store.state.authState == 'guest'" class="btn btn-outline-dark" :to="{ name: 'register'}">
                Регистрация
            </router-link>
            <a @click.prevent="logOut()" href="#" v-if="$store.state.authState == 'auth'" class="btn btn-outline-dark">
                Выйти из системы
            </a>
            <!-- <button class = "btn btn-outline-light" ng-click = "vm.showModal()" ng-if="vm.enter">Вход</button>
            <button class = "btn btn-outline-light" ui-sref="registration" ng-if="vm.registration">Регистрация</button>
            <button class = "btn btn-outline-light" ui-sref = "profile" ng-if="vm.profile">Профиль</button>
            <button class = "btn btn-outline-light" ng-click="vm.logoutFunct()" ng-if="vm.logout">Выход</button> -->
        </div>
    </section>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return {
                token: '',
            }
        },
        methods: {
            getToken() {
                axios.get('/backend/get_token')
                    .then((response) => {
                        this.token = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            logOut(){
                axios.post('/logout', {
                    // _token: this.token
                })
                    .then((response) => {
                        this.$store.state.authState= 'guest';
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            this.getToken();
        },
    }
</script>