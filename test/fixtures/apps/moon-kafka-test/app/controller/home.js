'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.moonKafka.name;
    console.log(this.ctx.kafka.kafka);
  }
}

module.exports = HomeController;
