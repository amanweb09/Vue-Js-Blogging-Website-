import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //STEP 1

//STEP 2
import Home from './components/Home'
import About from './components/About'

Vue.use(VueRouter); //STEP 3

const routes = [    //STEP 4
  {path: '/', component: Home},
  {path: '/about', component: About},
]

const router = new VueRouter({    //STEP 5
  routes
}) 

Vue.config.productionTip = false

new Vue({
  router:router,    //STEP 6
  render: h => h(App),
}).$mount('#app')
