<template>
    <section class="home">
        <div class="home__top">
            <h1>Узнай все о предприятии</h1>
            <h2>Введи любые данные о предприятии и получи результат!</h2>
            <form @submit.prevent="search">
                <div class="home__form">
                    <input type="text"
                           class="input_search input_mr10px"
                           v-model="query"
                           placeholder="БИН, название, директор, адрес и т.д.">
                    <input class="btn btn-warning" type="submit" value="Искать">
                </div>
            </form>
        </div>
        <div class="page-section section-adventages text-center">
            <div class="container">
                <h1 class="page-section__title">Лучший сервис для поиска информации о предприятии</h1>
                <div class="page-section__blocks">
                    <div class="block">
                        <div class="block__preview"><img src="/images/search-icon.png" alt=""></div>
                        <h3 class="block__title">Актуальные данные</h3>
                        <p class="block__description">Наши базы предприятий обновляются каждую неделю</p>
                    </div>
                    <div class="block">
                        <div class="block__preview"><img src="/images/success.png" alt=""></div>
                        <h3 class="block__title">Довольные клиенты</h3>
                        <p class="block__description">Наши клиенты всегда находят здесь то что ищут</p>
                    </div>
                    <div class="block">
                        <div class="block__preview"><img src="/images/easy.png" alt=""></div>
                        <h3 class="block__title">Удобно использовать</h3>
                        <p class="block__description">Наш сервис очень прост и легок в использовании</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="home__top">
            <h1>Хочешь получить больше информации?</h1>
            <h2>Тогда регистрируйся на нашем портале</h2>
            <router-link v-if="$store.state.authState == 'guest'" class="button" :to="{ name: 'register'}">
                Регистрация
            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                query : ''
            }
        },
        methods:{
            search(){
                this.$router.push({name : 'search', query : {query : this.query}})
            },
        },
        watch : {
            '$route.query.query'(){
                this.query = this.$route.query.query;
            },
        },
        created(){
            this.query = this.$route.query.query || '';
        },

    }
</script>