Vue.component('titulo', {
  template: /*html*/
  `
  <div>
    <h1>Numero: {{ numero }} </h1>
    <hijo></hijo>
  </div>
  `,
  computed: {
    // numero(){
    //   return store.state.numero
    // }
    ...Vuex.mapState(['numero'])
  },
});

Vue.component('hijo', {
  template: /*html*/
  `
  <div>
    <button @click="aumentar">+</button>
    <h1>Numero: {{ numero }} </h1>  
  </div>
  `,
  computed: {
    // numero(){
    //   return store.state.numero
    // }
    ...Vuex.mapState(['numero'])
  },
  methods: {
    ...Vuex.mapMutations(['aumentar'])
  },
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