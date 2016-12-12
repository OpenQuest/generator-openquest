'use strict';

var mocha = require('mocha');
var chai = require('chai');
var [func] = require('./index.js');

var expect = chai.expect;

describe('[Test Description]', function() {

    it('should export a function', function() {
        expect([func]).to.be.a('function');
    });
});