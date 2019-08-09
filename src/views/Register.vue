<template>
    <div class="bg-red background d-flex flex-row justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center login-box shadow-lg">
            <img class="logo-register mb-3" src="../assets/logo/register.svg">
            <h1 class="text-left mb-5">JOIN IN</h1>
            <input class="input input-lg mb-2" type="text" v-model="name" placeholder="이름 입력">
            <input class="input input-lg mb-2" type="text" v-model="email" placeholder="이메일 입력">
            <input class="input input-lg mb-4" type="password" v-model="password" placeholder="●●●●●●●●"
                   @keypress.enter="register">

            <button class="btn btn-lg btn-block btn-danger shadow mb-5" @click="register">완료</button>

            <div class="w-100 text-right">
                <div class="text-dark pointer" @click="login">이미 회원이라면 <u>로그인</u> 하러가기 →</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$router.push('/login');
            },
            async register() {
                try {
                    let response = await this.apiMixin({
                        method: 'POST',
                        url: ' http://13.209.79.211/api/auth/register',
                        data: {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                        },
                    });
                    //console.log(response);
                    if (response.status === 200) {
                        localStorage.setItem('accessToken',response.data.access_token);
                        localStorage.setItem('tokenType',response.data.token_type);
                        this.$router.push('/');
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

<style scoped>

</style>
