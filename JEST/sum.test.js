
const { test, expect } = require('@jest/globals')
var sum = require('./sum')

test("Testing sum()",() =>{
    expect(sum(2,3)).toBe(5);
})