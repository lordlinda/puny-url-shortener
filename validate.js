module.exports = {
  validate: (value) => {
    let errors = {};
    if (value.trim() === "") {
      return (errors = "Value is required");
    } else {
      errors = {};
    }

    return errors;
  },
};
