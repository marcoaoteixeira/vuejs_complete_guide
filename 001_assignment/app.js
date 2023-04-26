const app = Vue.createApp({
  data() {
    return {
      fullName: "Marco Antonio Orestes Teixeira",
      age: 40,
      image: "./img/software_developer.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis purus ac neque placerat posuere. Vivamus in sapien est. Donec placerat eros sed lectus accumsan, sed lobortis nibh tincidunt. Sed sodales turpis nisi, et cursus odio sagittis ac. Donec placerat metus eu magna ultrices interdum. Aenean at justo vitae felis lobortis mattis vel ac velit. Aliquam erat volutpat. Nam eu massa lorem. Aenean at dui malesuada sapien sollicitudin vestibulum sit amet non elit. In vitae varius est. Phasellus id commodo ante. Aliquam eros ex, volutpat ut condimentum eget, fringilla vel mauris. Aenean ut diam ligula. Sed fringilla faucibus aliquam. Nulla facilisi. Aenean faucibus nisi eu odio consequat semper ut vitae neque.",
    };
  },

  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
