function sentence(w, s){
    res = new RegExp(w, "gi")
    x = s.split(".")
    
    const newFilter = x.filter(newWord => newWord.match(res)).join()
    return newFilter
}

module.exports = sentence