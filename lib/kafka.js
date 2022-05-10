'use strict';

const kafka = require('kafka-node');

const getInstance = (() => {
  let instance = null;
  return options => {
    if (instance === null) {
      // instance = new kafka.KafkaClient({kafkaHost: '10.3.100.196:9092'});
      instance = new kafka.KafkaClient(options);
    }
    return instance;
  };
})();

module.exports = app => {
  return getInstance({ app });
};
