'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('recipes service', function() {
  it('registered the recipes service', () => {
    assert.ok(app.service('recipes'));
  });
});
