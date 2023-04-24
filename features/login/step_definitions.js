const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Login } = require('../../src')

When('user login with username={string} and password={string}', function (username, password) {
    this.response = new Login().login(username, password)
})

Then('I should get response {string}', function (expectedResponse) {
    assert.equal(this.response, expectedResponse)
})