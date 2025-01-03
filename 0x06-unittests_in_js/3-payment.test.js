const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  let utilSpy;

  // Setup the spy before each test
  beforeEach(() => {
    utilSpy = sinon.spy(Utils, 'calculateNumber');
  });

  // Restore the spy after each test
  afterEach(() => {
    sinon.restore();
  });

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(utilSpy.calledOnce).to.be.true;
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
