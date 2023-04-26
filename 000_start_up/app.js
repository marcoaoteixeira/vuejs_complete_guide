const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },

  methods: {
    outputGoal() {
      return Math.random() < 0.5 ? "Learn Vue!" : "Master Vue!";
    },
  },
});

app.mount("#user-goal");
