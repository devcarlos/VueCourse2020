
Vue.component('titulo', {
  template: /*html*/
  `
  <div>
    <h1>Numero: {{ $store.state.numero }} </h1>
    <hijo></hijo>
  </div>
  `
});

Vue.component('hijo', {
  template: /*html*/
  `
  <div>
    <button @click="$store.commit('aumentar')">+</button>
    <h1>Numero: {{ $store.state.numero }} </h1>  
  </div>
  `
});

const store = new Vuex.Store({
  state: {
    numero: 10
  },
  mutations: {
    aumentar() {
      this.state.numero ++
    }
  }
});

new Vue({
  el: '#app',
  store: store
})