const sentence = require('./sentence')

test('Only display sentences with keyword', () => {
    const w = "hello"
    const s = "hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all."
    expect(sentence(w, s)).toEqual('hello world oke lorem ipsum dolor, Hello all')
})