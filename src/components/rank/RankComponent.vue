<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../assets/logo/crown.svg">
        <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <div class="card-text">{{item.rank}}</div>
            <div class="card-text">랭킹 {{item.no}}</div>
            <a href="#" class="btn w-100 btn-danger">{{item.analytics}}</a>
        </div>
    </div>

    <!--<div class="border p-4 mr-3 pointer">-->
        <!--<div>{{item.no}}</div>-->
        <!--<div>{{item.name}}</div>-->
        <!--<div>{{item.rank}}</div>-->
        <!--<div>{{item.analytics}}</div>-->
    <!--</div>-->
</template>

<script>
    export default {
        props: ['item'],

    }
</script>

<style scoped>

</style>
