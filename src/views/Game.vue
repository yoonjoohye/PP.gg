<template>
    <div class="container">
        <div>
            <GameComponent :info="info"></GameComponent>
        </div>
        <div>
            <PostGame></PostGame>
        </div>
    </div>
</template>

<script>
    import GameComponent from "../components/GameComponent";
    import PostGame from "./PostGame.vue";

    export default {
        components:{GameComponent,PostGame},
        data(){
            return{
                info:{},
            }
        }
    }
</script>

<style scoped>

</style>
