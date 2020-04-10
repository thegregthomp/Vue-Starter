import Vue from 'vue';
import './scss/main.scss';

import store from './store'
import router from './router'

import Components from './components'

import Layout from './layout'

new Vue({
    el: '#app',
    store,
    delimiters: [
        '${', '}'
    ],
    router,
    // store,
    components: Components,
    methods: {},
    mounted() {
        // Resolve the promise
        console.log('VUE!')
        // Output any flash messages
    },
    render: h => h(Layout),
    computed: {}
});
