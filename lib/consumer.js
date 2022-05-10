"use strict";

const kafka = require("kafka-node");
const getClient = require("./client");

const Consumer = kafka.Consumer;

const getInstance = (() => {
  let instance = null;

  return (app) => {
    if (instance === null) {
      const client = getClient(app);
      return new Consumer(client);
    }

    return instance;
  };
})();

module.exports = (app) => {
  return getInstance(app);
};
