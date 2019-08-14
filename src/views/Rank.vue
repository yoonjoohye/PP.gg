<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            pp.gg는 '신라'의 신분제도를 도입하고 있습니다.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <!--성골-->
        <div class="d-flex flex-row justify-content-center mb-2">
            <RankComponent v-for="(item,index) in info" :item="item" :class="info.length>1?'mr-2':''" v-if="parseInt(item.no)===1"></RankComponent>
        </div>
        <!--진골-->
        <div class="d-flex flex-row justify-content-center mb-2">
            <RankComponent v-for="(item,index) in info" :item="item" :class="info.length>1?'mr-2':''" v-if="parseInt(item.no)>1 && parseInt(item.no)<=4"></RankComponent>
        </div>
        <!--평민-->
        <div class="d-flex flex-row justify-content-center mb-2">
            <RankComponent v-for="(item,index) in info" :item="item" :class="info.length>1?'mr-2':''" v-if="parseInt(item.no)>4 && parseInt(item.no)<=8"></RankComponent>
        </div>
        <!--불가촉천민-->
        <div class="d-flex flex-row justify-content-center mb-2">
            <RankComponent v-for="(item,index) in info" :item="item" :class="info.length>1?'mr-2':''" v-if="parseInt(item.no)>8"></RankComponent>
        </div>
    </div>
</template>

<script>
    import RankComponent from '@/components/rank/RankComponent.vue'

    export default {
        components: {
            RankComponent
        },
        data() {
            return {
                info: [
                    {
                        no: '1',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '2',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '3',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '4',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '5',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '6',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '7',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '8',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '9',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '10',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '11',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                    {
                        no: '12',
                        name: '윤주혜',
                        rank: '불가촉천민',
                        analytics: '/player',
                    },
                ]
            }
        },
        created() {
            this.me();
            console.log(localStorage.getItem('accessToken'));
            console.log(localStorage.getItem('tokenType'));
        },
        methods: {
            async me() {
                try {
                    let response = await this.apiMixin({
                        method: 'POST',
                        url: ' http://13.209.79.211/api/auth/me',
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    });
                    console.log(response);

                    if (response.status === 200) {

                    } else {
                        alert('회원가입 실패');
                    }
                } catch (error) {
                    console.log(error.response);
                }
            },
        }
    }
</script>
