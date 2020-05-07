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
    <button @click="disminuir(2)">-</button>
    <h1>Numero: {{ numero }} </h1>  
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero'])
  },
  methods: {
    ...Vuex.mapMutations(['aumentar', 'disminuir'])
  },
});

const store = new Vuex.Store({
  state: {
    numero: 10
  },
  mutations: {
    aumentar(state) {
      state.numero ++
    },
    disminuir(state, n) {
      state.numero -= n
    }
  }
});

new Vue({
  el: '#app',
  store: store
})