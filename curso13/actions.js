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
    <button @click="getCursos">GET Cursos</button>
    <h1>Numero: {{ numero }} </h1>
    <ul v-for="item of cursos">
      <li>{{ item.nombre }}</li>
    </ul>
  </div>
  `,
  computed: {
    ...Vuex.mapState(['numero', 'cursos'])
  },
  methods: {
    ...Vuex.mapMutations(['aumentar', 'disminuir']),
    ...Vuex.mapActions(['getCursos'])
  },
});

const store = new Vuex.Store({
  state: {
    numero: 10,
    cursos: []
  },
  mutations: {
    aumentar(state) {
      state.numero ++
    },
    disminuir(state, n) {
      state.numero -= n
    },
    fillCursos(state, cursos) {
      state.cursos = cursos
    }
  },
  actions: {
    getCursos: async function({ commit }) {
      const data = await fetch('cursos.json');
      const cursos = await data.json();
      commit('fillCursos', cursos);
    }
  }
});

new Vue({
  el: '#app',
  store: store
})