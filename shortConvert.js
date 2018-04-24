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
        "p": "_$$",
        "o": "([]+{})",
        "r": "(!![]+[])",
        "s": "(![]+[])",
        "t": "(!![]+[])",
        "u": "([][[]]+[])",
        "v": "($_+[])",
        "y": "([][__]+[])",
        "A": "([][__]+[])",
        "B": "((![])[__]+[])",
        "C": "_$$",
        "F": "($_+[])",
        "N": "(+[][[]]+[])",
        "O": "([]+{})",
        "S": "(([]+[])[__]+[])",
        "U": "_$$",
        "(": "($_+[])",
        ")": "($_+[])",
        "{": "($_+[])",
        "}": "($_+[])",
        "[": "([]+{})",
        "]": "([]+{})",
        " ": "([]+{})",
        ";": "((_=>{;})+[])",
        "$": "(($=>$)+[])",
        "_": "((_=>_)+[])",
        ">": "((_=>_)+[])",
        "<": "((_=>_<_)+[])",
        "=": "((_=>_)+[])",
        "+": "((_=>_+_)+[])",
        "-": "((_=>_-_)+[])",
        "*": "((_=>_*_)+[])",
        "/": "((_=>_/_)+[])",
        "&": "((_=>_&_)+[])",
        "|": "((_=>_|_)+[])",
        "^": "((_=>_^_)+[])",
        "%": "((_=>_%_)+[])",
        ".": "((_=>_._)+[])",
        "~": "((_=>~_)+[])",
        "!": "((_=>!_)+[])",
        ":": "((_=>{$:_})+[])",
        "?": "((_=>_?_:_)+[])"
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
        "p": 3,
        "r": 1,
        "s": 3,
        "t": 0,
        "u": 0,
        "v": 27,
        "y": 13,
        "A": 9,
        "B": 9,
        "C": 7,
        "N": 0,
        "O": 8,
        "S": 9,
        "U": 2,
        "(": 17,
        ")": 18,
        "{": 20,
        "}": 36,
        "[": 0,
        "]": 14,
        " ": 7,
        ";": 4,
        "$": 0,
        "_": 0,
        ">": 2,
        "<": 4,
        "=": 1,
        "+": 4,
        "-": 4,
        "*": 4,
        "/": 4,
        "&": 4,
        "|": 4,
        "^": 4,
        "%": 4,
        ".": 4,
        "~": 3,
        "!": 3,
        ":": 5,
        "?": 4
    }, result = "";
    if (char in charModel)
        result = `${
            charModel[char]
            }[${
            getNum(charValue[char])
            }]`;
    if (char.match(/[a-z]/)) {
        var code = char.charCodeAt() - 87,
            compare = `(${
                getNum(code)
                })[_$](${
                getNum(code + 1)
                })`;
        if (compare.length < result.length || !result.length)
            result = compare;
    }
    if (char.match(/[A-Z]/)) {
        var charLower = char.toLowerCase(),
            compare = `${getChr(charLower)}[_$$]()`;
        if (compare.length < result.length || !result.length)
            result = compare;
    }
    if (char.match(/\d/))
        return `${getNum(char)}+[]`;
    {
        var compare = `__$(${getNum(char.charCodeAt())})`;
        if (compare.length < result.length || !result.length)
            result = compare;
    }
    return result;
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
    if (number.length == negative + 1)
        return result.substr(negative, result.length);
    return `${negative ? "-" : "+"}(${result})`;
}
In.oninput();