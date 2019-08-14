<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            매칭을 등록해주세요!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div>
            <MatchComponent :info="info"></MatchComponent>
        </div>
        <div class="fixed-bottom" :class="showPostMatch?'up':'down'" >
            <div class="arrow-box text-white text-center pointer" @click="showPostMatch=!showPostMatch">대전기록 등록하기</div>
            <div class="d-flex flex-row justify-content-center justify-between mt-5 mb-3">
                <select class="form-control form-control-lg w-25 mr-3">
                    <option value="1">윤주혜</option>
                    <option value="2">정록헌</option>
                    <option value="3">백지환</option>
                </select>
                <select class="form-control form-control-lg w-25">
                    <option value="1">윤주혜</option>
                    <option value="2">정록헌</option>
                    <option value="3">백지환</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center mb-5">
                <input class="form-control form-control-lg w-25" type="number" placeholder="점수">
                :
                <input class="form-control form-control-lg w-25" type="number" placeholder="점수">
            </div>

            <div class="d-flex flex-row justify-content-center">
                <button class="btn btn-lg btn-danger shadow mb-5">등록</button>
            </div>

        </div>
    </div>
</template>

<script>
    import MatchComponent from "@/components/match/MatchComponent";

    export default {
        components:{MatchComponent},
        data(){
            return{
                info:{},
                showPostMatch:false,
            }
        }
    }
</script>

<style lang="less">
    .up{
        transition: all 0.5s;
        transform: translateY(-300px);
    }
    .down{
        transition: all 0.5s;
        transform: translateY(0px);
    }
    .arrow-box {
        position: relative;
        background: #f6c544;
        padding:8px;
        &:after {
            bottom: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-color: rgba(232, 137, 102, 0);
            border-bottom-color: #f6c544;
            border-width: 15px;
            margin-left: -30px;
        }
    }
</style>
