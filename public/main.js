new Vue({
  el: "#app",
  data: {
    error: "",
    success: false,
    name: "",
    url: "",
  },
  methods: {
    createPuny() {
      const body = {
        name: this.name,
        url: this.url,
      };

      fetch("/api/urls", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          //console.log(response);
          return response.json();
        })
        .then((result) => {
          console.log(result);
          if (result.isJoi) {
            console.log(result.details);
            this.error = result.error.details
              .map((detail) => detail.message)
              .join(". ");
          } else {
            this.success = true;
          }
        });
    },
  },
});
