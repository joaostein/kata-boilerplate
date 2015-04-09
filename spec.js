'use strict';

var chai = require('chai');

/**
 * Chai Should syntax
 *
 * foo.should.be.a('string');
 * foo.should.equal('bar');
 * foo.should.have.length(3);
 * tea.should.have.property('flavors').with.length(3);
 *
 * Documentation: http://chaijs.com/guide/styles/#should
 */

// chai.should();

/**
 * Chai Expect syntax
 *
 * expect(foo).to.be.a('string');
 * expect(foo).to.equal('bar');
 * expect(foo).to.have.length(3);
 * expect(tea).to.have.property('flavors').with.length(3);
 *
 * Documentation: http://chaijs.com/guide/styles/#expect
 */

var expect = chai.expect;

describe('Example', function () {
  it('should pass all tests', function (done) {
    expect(true).to.equal(true);
    done();
  });
});
