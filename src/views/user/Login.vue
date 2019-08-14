<template>
    <div class="bg-red background d-flex flex-row justify-content-center align-items-center">
        <div class="mr-5">
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center login-box shadow-lg">
            <img class="logo-login mb-3" src="../../assets/logo/login.svg">
            <h1 class="text-left mb-5">LOG IN</h1>

            <input class="input input-lg mb-3" type="text" v-model="email" placeholder="이메일 입력">
            <input class="input input-lg mb-4" type="password" v-model="password" placeholder="●●●●●●●●" @keypress.enter="login">

            <button class="btn btn-lg btn-block btn-danger shadow mb-5" @click="login">로그인</button>

            <div class="w-100 text-right">
                <div class="text-dark pointer" @click="register"><u>회원가입</u>을 원하신다면 →</div>
                <div class="text-dark pointer" @click="comento">아직 코멘토 팀원이 아니신가요? →</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods: {
            register() {
                this.$router.push('/register');
            },
            comento() {
                window.open('https://comento.kr/jobs/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%EC%BD%94%EB%A9%98%ED%86%A0_Frontend%EA%B0%9C%EB%B0%9C_%EC%8B%A0%EC%9E%85-944', '_target');
            },
            async login(){
                try {
                    let response = await this.apiMixin({
                        method: 'POST',
                        url: 'http://13.209.79.211/api/auth/login',
                        data: {
                            email: this.email,
                            password: this.password,
                        },
                    });
                    //console.log(response);
                    if (response.status === 200) {
                        localStorage.setItem('accessToken',response.data.access_token);
                        localStorage.setItem('tokenType',response.data.token_type);
                        this.$router.push('/');
                    }
                }
                catch(error){
                    console.log(error);
                }
            },
        }
    }
</script>
