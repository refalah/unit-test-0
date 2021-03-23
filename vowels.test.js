const isVowel = require('./vowels')

test('Check if the letter is a vowel', () => {
    expect(isVowel('x')).toBeFalsy()
})