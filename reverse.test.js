
const revNum = require('./reverse')

test('See if function is defined', () => {
    expect(revNum).toBeDefined()
})

test('Check if Reverse Function works properly', () => {
    expect(revNum('hello')).toEqual('olleh')
})