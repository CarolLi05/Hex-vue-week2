
import { createApp } from '<https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js>';

const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'carolli_apexc';

createApp({
    data(){
        return{
            temp: {},
            products: [],
        }
    }
}).mount('#app');