'use strict';

const path = require('path');

module.exports = app => {
  app.loader.loadToApp(path.resolve(__dirname, './lib'), 'kafka', {
    call: true,
    caseStyle: 'camel', // 首字母不变
  });

  app.loader.loadToContext(path.resolve(__dirname, './lib'), 'kafka', {
    call: true,
    caseStyle: 'camel', // 首字母不变
  });
};
