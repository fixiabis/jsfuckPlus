var AB = content => content,
    randomO = () => "[]";
function getChr(char) {
    var charModel = {
        "a": "(![]+[])",
        "b": "([]+{})",
        "c": "([]+{})",
        "d": "([][[]]+[])",
        "e": "(!![]+[])",
        "f": "(![]+[])",
        "g": "_$",
        "i": "([][[]]+[])",
        "j": "([]+{})",
        "l": "(![]+[])",
        "m": "((+[])[__]+[])",
        "n": "([][[]]+[])",
        "o": "([]+{})",
        "r": "(!![]+[])",
        "s": "(![]+[])",
        "t": "(!![]+[])",
        "u": "([][[]]+[])",
        "v": "($_+[])",
        "B": "((![])[__]+[])",
        "C": "_$$",
        "U": "_$$",
        "(": "($_+[])",
        ")": "($_+[])",
        "{": "($_+[])",
        "}": "($_+[])",
        "[": "([]+{})",
        "]": "([]+{})",
        " ": "([]+{})",
    }, charValue = {
        "a": 1,
        "b": 2,
        "c": 5,
        "d": 2,
        "e": 3,
        "f": 0,
        "g": 7,
        "i": 5,
        "j": 3,
        "l": 2,
        "m": 11,
        "n": 1,
        "o": 1,
        "r": 1,
        "s": 3,
        "t": 0,
        "u": 0,
        "v": 27,
        "B": 9,
        "C": 7,
        "U": 2,
        "(": 17,
        ")": 18,
        "{": 20,
        "}": 36,
        "[": 0,
        "]": 14,
        " ": 7
    };
    if (char in charModel) {
        return `${
            charModel[char]
            }[${
            getNum(charValue[char])
            }]`;
    }
    if (char.match(/[a-z]/)) {
        var code = char.charCodeAt() - 87;
        return `(${
            getNum(code)
            })[_$](${
            getNum(code + 1)
            })`;
    }
    if (char.match(/[A-Z]/)) {
        var charLower = char.toLowerCase();
        return `${getChr(charLower)}[_$$]()`;
    }
    if (char.match(/\d/)) {
        return `${getNum(char)}+[]`;
    }
    return `__$(${getNum(char.charCodeAt())})`;
}
function getNum(number) {
    number += "";
    if (number == "Infinity") return getNum("1e1000");
    else if (number == "-Infinity") return getNum("-1e1000");
    else if (number == "NaN") return "+[][[]]";
    else if (number == "-NaN") return "-[][[]]";
    var result = "",
        negative = number[0] == "-";
    for (var i = negative ? 1 : 0; i < number.length; i++) {
        var join = "";
        if (number[i] == 0) {
            join += "+[]";
        } else if (isNaN(number[i]))
            join += getChr(number[i]);
        else for (var j = 0; j < number[i]; j++)
            join = (j == 0 ? "-~[]" : "-~") + join;
        result += i == (negative ? 1 : 0) ? join : `+[]+(${join})`;
    }
    if (number.length == negative + 1) {
        console.log("is < 10");
        return result.substr(negative, result.length);
    }
    return `${negative ? "-" : "+"}(${result})`;
}
In.oninput();