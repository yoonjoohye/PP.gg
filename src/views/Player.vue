<template>
    <div class="container">
        <PlayerComponent :info="info"></PlayerComponent>
    </div>
</template>

<script>
    import PlayerComponent from "../components/PlayerComponent";

    export default {
        components: {PlayerComponent},
        data() {
            return {
                info: [
                    {
                        name: '윤주혜',
                        rank: '3',
                    },
                    {
                        name: '주혜',
                        rank: '2',
                    },
                    {
                        name: '윤혜',
                        rank: '1',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
