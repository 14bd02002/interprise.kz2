<template>
    <div>
        <div class="container">
            <div class="search">
                <form @submit.prevent="localSearch">                    
                <div class="home__form">
                    <input type="text"
                           class="input_search input_mr10px"
                           v-model="localQuery"
                           placeholder="Искать предприятие...">
                    <input class="btn btn-warning" type="submit" value="Искать">
                </div>
                </form>
            </div>
            <h1>Результаты поиска</h1>
            <hr>
            <div class="results">
                <div v-if="status == 'searching'" class="not-found">
                    <img src="/images/elem/findc.svg" width="25" height="25">
                    <p>Обработка запроса...</p>
                </div>
                <div v-if="status == 'not-found'" class="not-found">
                    <img src="/images/elem/findc.svg" width="25" height="25">
                    <p>Найдено предприятий {{ results.length }}</p>
                </div>
                <div class="option_block" v-if="status == 'loaded'">
                    <img src="/images/elem/findc.svg" width="25" height="25">
                    <p>Найдено предприятий {{ results.length }}</p>
                </div>                         
                <div v-if="status == 'loaded'" v-for="(item, index) in results" class="result">
                    
                    <h2 class="result__name">
                        <router-link :to="{ name: 'company', params: { companyBin: item.BIN }}">
                            {{ item.name_ru }}
                        </router-link>
                    </h2>
                    <p class="result__activity">
                        <b>{{ item.activity_ru }}</b>
                    </p>
                    <p class="result__address">
                        Юридический адрес: {{ item.address }}
                    </p>
                    <p class="result__ceo">
                        Руководитель: {{ item.CEO }}
                    </p>
                    <p class="result__date">
                        Дата основания: {{ item.register_date }}
                    </p>
                    <p class="result__bin">
                        БИН: {{ item.BIN }}
                    </p>
                    <p class="result__oked">
                        ОКЭД: {{ item.economic_activity_code }}
                    </p>
                    <p class="result__kato">
                        КАТО: {{ item.territory_code }}
                    </p>
                    <p class="result__status">
                        Статус:
                        <span v-if="item.active == 1" class="active">В работе</span>
                        <span v-else>Не работает</span>
                    </p>
                    <br><br><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                query: '',
                localQuery: '',
                results: '',
                status: 'empty',
            }
        },
        methods: {
            localSearch(){
                if(this.localQuery != ''){
                    this.query = this.localQuery;
                    this.$router.push({name : 'search', query : {query : this.query}});
                    this.findRequest();
                }
            },
            search() {
                if((this.$route.query.query != undefined) && (this.$route.query.query.length > 0)){
                    this.status="searching";
                    this.query = this.$route.query.query;
                    this.localQuery = this.$route.query.query;
                    this.findRequest();
                }
            },
            findRequest(){
                axios.get('/backend/search/' + this.query)
                    .then((response) => {
                        this.results = response.data.data;
                        this.results.length == 0 ? this.status = 'not-found' : this.status = 'loaded'
                    })
                    .catch(function (error) {
                        console.log(error);
                        this.status = 'error';
                    });
            }
        },
        created() {
            this.search();
        },
        watch : {
            '$route.query.query'(){
                this.search();
            }
        },
        mounted(){
            console.log('mount');
        }
    }
</script>