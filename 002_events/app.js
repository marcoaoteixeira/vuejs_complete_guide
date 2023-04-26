const app = Vue.createApp({
  data() {
    return {
      value: 0,
      counter: 0,
      name: "",
    };
  },
  methods: {
    increase(value) {
      this.counter += parseInt(value);
    },
    reduce(value) {
      this.counter -= parseInt(value);
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});

app.mount("#events");
