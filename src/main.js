import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

import App from './App.vue'

const store = createStore({
    state(){
        return{
            counter:10,
        }
    },
    mutations: {
        addToCounter(state, payload){
            state.counter = state.counter + payload
        },
        subtractFromCounter(state, payload){
            state.counter = state.counter - payload
        }
    },
    actions: {
        async addRandomNumber(context){
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            context.commit("addToCounter", data.data)
        }
    }
})

const app = createApp(App);

app.use(store)
app.mount('#app')
