import Vue from "vue";

const AsyncValidator = require("async-validator");

const validator = (descriptor, data) => {
  let result;

  const validatorInstance = new AsyncValidator.default(descriptor);

  validatorInstance.validate(data, { firstFields: true }, errors => {
    result = errors ? errors[0].message : true;
  });
  return result;
};

let ValidatorPlugin = {};
ValidatorPlugin.install = vue => {
  vue.prototype.$validator = async (rule, data) => {
    return validator(rule, data);
  };
};

Vue.use(ValidatorPlugin);
