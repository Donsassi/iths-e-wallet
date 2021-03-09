import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    is_selected:false,
    cards: [],
    selectedCard:{
      index:-1,
      number:'6666 6666 6666 6666',
      username:'Christoffer Wallenberg',
      date1:'03',
      date2:'21',
      card_type:'evil'
    }
  },
 
})



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
