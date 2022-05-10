'use strict';

const mock = require('egg-mock');

describe('test/moon-kafka.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/moon-kafka-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, moonKafka')
      .expect(200);
  });
});
