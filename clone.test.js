const { test, expect } = require('@jest/globals');
const { array } = require('yargs');
const cloneArray = require('./clone');

test('properly clones', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})