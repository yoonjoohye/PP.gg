<template>
    <div id="app">

        <div v-if="$router.currentRoute.name !== 'login' && $router.currentRoute.name !== 'register'">

            <!--header-->
            <div class="bg-red header"></div>

            <!---nav-->
            <div class="container">
                <div class="nav d-flex flex-row align-items-center justify-content-between">
                    <div class="d-flex flex-row justify-content-end">
                        <div class="mr-5">
                            <router-link to="/">
                                <span class="underline font-weight-normal text-muted">탁구랭킹</span>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/match">
                                <span class="underline font-weight-normal text-muted">탁구대전</span>
                            </router-link>
                        </div>
                        <!--<div>-->
                            <!--<router-link to="/player"><img class="logo-match" src="./assets/logo/pingpong.svg"/><span class=" text-muted">선수 분석</span></router-link>-->
                        <!--</div>-->
                    </div>
                    <div class="pointer">
                        <span class="font-weight-normal text-danger mr-1">로그아웃</span><img class="logo-logout" src="./assets/logo/logout.svg" @click="logout"/>
                    </div>
                </div>
            </div>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default{
        methods:{
            logout(){
                location.href='/logout';
            }
        }
    }
</script>
<style lang="less">

</style>
