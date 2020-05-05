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
    },
    render: h => h(Layout),
    computed: {}
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.menu-toggle').forEach(e => {
    e.addEventListener('click', ()=>{
      console.log('clicked')
      const element = document.querySelector('.left-nav');
      element.classList.toggle('active');
    })
  });
});
