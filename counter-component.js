const CounterComponent = {
  data() {
    return {
      localCounter: 0
    }
  },
  methods: {
    incrementLocal() {
      this.localCounter++
    },
    decrementLocal() {
      this.localCounter--
    }
  },
  template: `
    <div>
      <h2>Counter Component</h2>
      <p>Local Counter: {{ localCounter }}</p>
      <button @click="incrementLocal">Increment Local</button>
      <button @click="decrementLocal">Decrement Local</button>
    </div>
  `
}

export default CounterComponent