const isPrime = require('./prime');


test('Check if number is prime', () => {
    expect(typeof isPrime).toEqual('function')
})

test('Check if number is prime', () => {
    expect(isPrime(7)).toBeTruthy()
})