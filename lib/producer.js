"use strict";

const kafka = require("kafka-node");
const getClient = require("./client");

const Producer = kafka.Producer;

const getInstance = (() => {
  let instance = null;

  return (app) => {
    if (instance === null) {
      const client = getClient(app);
      return new Producer(client);
    }

    return instance;
  };
})();

module.exports = (app) => {
  return getInstance(app);
};
