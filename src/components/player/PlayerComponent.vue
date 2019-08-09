<template>
    <div class="d-flex flex-row">
        <div v-for="item in info">
            <div>{{item.name}}</div>
            <div>{{item.rank}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['info'],
    }
</script>

<style scoped>

</style>
