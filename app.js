import CounterComponent from './counter-component.js';

const { createApp } = Vue

const app = createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  },
  components: {
    'counter-component': CounterComponent
  },
  template: `
    <div>
      <h1>Counter App</h1>
      <counter-component></counter-component>
    </div>
  `
})

app.mount('#app')
