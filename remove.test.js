const remove = require('./remove')

test('See if function is defined', () => {
    expect(remove).toBeDefined()
})

test('Check if Remove Function works properly', () => {
    const input1 = ['a', 'b', 'c']
    const input2 = 'c'
    expect(remove(input1, input2)).toEqual(['a', 'b']);
})