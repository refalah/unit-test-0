function revNum(num) {
    x = num.toString();
    return x.split("").reverse().join("");
}

console.log(revNum(12345));

module.exports = revNum