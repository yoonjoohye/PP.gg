<template>
    <div>
        <!--성골-->
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="border p-4 mr-3 pointer" v-for="(item,index) in info" v-if="parseInt(item.no)===1">
                <div>{{item.no}}</div>
                <div>{{item.name}}</div>
                <div>{{item.rank}}</div>
                <div>{{item.analytics}}</div>
            </div>
        </div>

        <!--진골-->
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="border p-4 mr-3 pointer" v-for="(item,index) in info" v-if="parseInt(item.no)>1 && parseInt(item.no)<=4">
                <div>{{item.no}}</div>
                <div>{{item.name}}</div>
                <div>{{item.rank}}</div>
                <div>{{item.analytics}}</div>
            </div>
        </div>

        <!--평민-->
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="border p-4 mr-3 pointer" v-for="(item,index) in info" v-if="parseInt(item.no)>4 &&parseInt(item.no)<9">
                <div>{{item.no}}</div>
                <div>{{item.name}}</div>
                <div>{{item.rank}}</div>
                <div>{{item.analytics}}</div>
            </div>
        </div>

        <!--불가촉천민-->
        <div class="d-flex flex-row justify-content-center">
            <div class="border p-4 mr-3 pointer" v-for="(item,index) in info" v-if="parseInt(item.no)>=9">
                <div>{{item.no}}</div>
                <div>{{item.name}}</div>
                <div>{{item.rank}}</div>
                <div>{{item.analytics}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['info'],

    }
</script>

<style scoped>

</style>
