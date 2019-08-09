<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            매칭을 등록해주세요!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div>
            <MatchComponent :info="info"></MatchComponent>
        </div>
        <div>
            <PostMatchComponents></PostMatchComponents>
        </div>
    </div>
</template>

<script>
    import MatchComponent from "@/components/match/MatchComponent";
    import PostMatchComponent from "@/components/match/PostMatchComponent";

    export default {
        components:{MatchComponent,PostMatchComponent},
        data(){
            return{
                info:{},
            }
        }
    }
</script>

<style scoped>

</style>
