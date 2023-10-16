"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, secretCode) {
        this.name = name;
        this.secretCode = secretCode;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.setName = function (name) {
        this.name = name;
    };
    BankCustomer.prototype.getSecretCode = function () {
        return this.secretCode;
    };
    BankCustomer.prototype.setSecretCode = function (secretCode) {
        this.secretCode = secretCode;
    };
    BankCustomer.prototype.verifyPinInput = function (pinCode) {
        if (this.secretCode == pinCode) {
            return true;
        }
        return false;
    };
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
