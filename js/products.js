
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'carolli_apexc';

createApp({
    data(){
        return{
            temp: {},
            products: [],
        }
    },
    methods:{
        checkLogin(){
            axios.post(`${url}/api/user/check`)
            .then((res)=>{
                // console.log(res.data);
                this.getProducts();
            })
            .catch((err)=>{
                // console.dir(err.data.message);
                // alert(err.data.message);
                window.location = './index.html';
            })
        },
        getProducts(){
            axios.get(`${url}/api/${path}/admin/products`)
            .then((res)=>{
                this.products = res.data.products;
                // console.log(this.products);
            })
            .catch((err)=>{
                // alert(err.data.message);
                window.location = './index.html';
            })
        },
        showProduct(item){
            this.temp = item;
        },
    },
    created(){ //當作 init
        // 取出 token，經過驗證之後才會執行 check
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.checkLogin();
    }
}).mount('#app');