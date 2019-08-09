import axios from 'axios';

const http = axios.create();

const loadingMixin={
    methods: {
        axiosLoading() {
            //showLoading
            http.interceptors.request.use((config) => {
                this.requestLoading();
                return config;
            }, function (error) {
                this.responseLoading();
                return Promise.reject(error);
            });

            //closeLoading
            http.interceptors.response.use((response) => {
                this.responseLoading();
                return response;
            }, function (error) {
                this.responseLoading();
                return Promise.reject(error);
            });
        },

        requestLoading() {
            const blinder = document.getElementById("blinder2");
            blinder.style.display = "block";
            const loading = document.getElementById("loading");
            loading.style.display = "block";
        },

        responseLoading() {
            const blinder = document.getElementById("blinder2");
            blinder.style.display = "none";
            const loading = document.getElementById("loading");
            loading.style.display = "none";
        },
    }
};

const joohyeMixin = {
    mixins:[loadingMixin],
    methods: {
        async apiMixin({method: method, url: url, data: data = {}, params: params = {},headers: headers = {}, isLoading : isLoading=false}) {
            if(isLoading){
                this.axiosLoading();
            }
            return await http({
                method: method,
                url: url,
                data: data,
                params: params,
                headers:headers,
            });
        }
    },
};

export default joohyeMixin;
