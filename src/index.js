module.exports = function reverse (n) {
    let string = String(Math.abs(n));
    string = [...string].reverse().join("");
    console.log(string);
    string = Number(string)
    console.log(string);
    
    return string;
}
