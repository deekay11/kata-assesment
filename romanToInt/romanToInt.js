function romanToInt(str) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let value = values[str[i]];
        let nextValue = values[str[i + 1]] || 0;
        if (value < nextValue) {
            result -= value;
        } else {
            result += value;
        }
    }
    return result;
}
module.exports = romanToInt;

