function isVowel(letter){
    const newLetter = letter.toLowerCase()
    const vowelList = ["a", "i", "u", "e", "o"]
    let text = ""
    let n = vowelList.indexOf(newLetter)

    for (i = n; i <= n; i++){
            if(vowelList[i] === newLetter){
                return true
            } else {
                return false
            }
        }
    
}

module.exports = isVowel