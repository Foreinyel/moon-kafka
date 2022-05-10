"use strict";

const kafka = require("kafka-node");
const getClient = require("./client");

const Consumer = kafka.Consumer;

module.exports = (app) => {
  return (payloads, options) => {
    return new Consumer(getClient(app), payloads, options);
  };
};
