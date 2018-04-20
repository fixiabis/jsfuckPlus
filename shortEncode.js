In.oninput = function () {
    var enString = "",
        content = this.value.replace(/\"\"/g, "[]+[]").split("\"");
    for (var i = 0; i < content.length; i++) {
        if (!content) continue;
        if (i % 2 == 0) enString += content[i];
        else {
            var tabs = "";
            if (content[i - 1] && content[i - 1].length > 0) {
                var lines = content[i - 1].split("\n"),
                    lastLine = lines[lines.length - 1],
                    spaceMatch = lastLine.match(/ /g);
                if (spaceMatch && spaceMatch.length == lastLine.length)
                    tabs = lastLine;
            }
            enString += enFuck(content[i], tabs);
        };
    }
    var nums = enString.match(/\W(NaN|-NaN|Infinity|-Infinity|\d+e\+\d+|-\d+e\d+|\d+\.\d+|-\d+\.\d+|-\d+|\d+)/g);
    if (nums)
        for (var i = 0; i < nums.length; i++) {
            var sym = nums[i].match(/\W/, "");
            if (sym != null) sym = sym[0];
            if (sym == "$") continue;
            enString = enString.replace(nums[i], sym + getNum(nums[i].replace(sym, "")));
        }
    while (enString.match(/true|false/))
        enString = enString.replace("true", "!![]").replace("false", "![]");
    Out.value = enString;
};
function enFuck(content, tabs) {
    var enContent = "";
    for (var i = 0; i < content.length; i++) {
        enContent += getChr(content[i]);
        if (i < content.length - 1) enContent += "+\n" + tabs;
    }
    return enContent;
}
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
    return `${negative ? "-" : "+"}(${result})`;
}
In.oninput();