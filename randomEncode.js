function enFuck(content, tabs) {
    var enContent = "";
    for (var i = 0; i < content.length; i++) {
        enContent += getChr(content[i]);
        if (i < content.length - 1) enContent += "+\n" + tabs;
    }
    return AB(enContent);
}
function AB(content) {
    while (content.match(/a|b/))
        content = content.replace("a", randomO("{}")).replace("b", randomO());
    return content;
}
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
            enString = enString.replace(nums[i], sym + AB(getNum(nums[i].replace(sym, ""))));
        }
    while (enString.match(/true|false/))
        enString = enString.replace("true", `!!${randomO()}`).replace("false", `!${randomO()}`);
    Out.value = enString;
};
function randomO(result) {
    var v = ((Math.random() * 4) | 0);
    if (!result) result = "[]";
    for (var i = 0; i < v; i++)
        result = (((Math.random() * 2) | 0) == 0
            ? `(${result})`
            : `[${result}]`);
    return result;
}
function getChr(char) {
    var charModel = {
        "a": "(!b+b)",
        "b": "(b+a)",
        "c": "(b+a)",
        "d": "(b[b]+b)",
        "e": "(!!b+b)",
        "f": "(!b+b)",
        "g": "_$",
        "i": "(b[b]+b)",
        "j": "(b+a)",
        "l": "(!b+b)",
        "m": "((+b)[__]+b)",
        "n": "(b[b]+b)",
        "o": "(b+a)",
        "r": "(!!b+b)",
        "s": "(!b+b)",
        "t": "(!!b+b)",
        "u": "b[b]+b",
        "v": "($_+b)",
        "B": "((!b)[__]+b)",
        "C": "_$$",
        "U": "_$$",
        "(": "($_+b)",
        ")": "($_+b)",
        "{": "($_+b)",
        "}": "($_+b)",
        "[": "(b+a)",
        "]": "(b+a)",
        " ": "(b+a)",
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
    if (char in charModel && ((Math.random() * 2) | 0) == 1) {
        return `(${
            randomO(charModel[char])
            }+b)[${
            getNum(charValue[char])
            }]`;
    }
    if (char.match(/[a-z]/) && ((Math.random() * 2) | 0) == 1) {
        var code = char.charCodeAt() - 87;
        return `(${
            getNum(code)
            })[_$](${
            getNum(code + 1)
            })`;
    }
    if (char.match(/[A-Z]/) && ((Math.random() * 2) | 0) == 1) {
        var charLower = char.toLowerCase();
        return `${getChr(charLower)}[_$$]()`;
    }
    return `__$(${getNum(char.charCodeAt())})`;
}
function getNum(number) {
    number += "";
    if (number == "Infinity") return getNum("1e1000");
    else if (number == "-Infinity") return getNum("-1e1000");
    else if (number == "NaN") return "+b[b]";
    else if (number == "-NaN") return "-b[b]";
    var result = "",
        negative = number[0] == "-",
        numberModel = [
            ["+b", "~~b", "+!b", "~~!b"],
            ["+!+b", "+!!b", "-~b", "-~"]
        ];
    for (var i = negative ? 1 : 0; i < number.length; i++) {
        var join = "";
        if (number[i] == 0) {
            join += numberModel[0][(Math.random() * 4) | 0];
        } else if (isNaN(number[i]))
            join += getChr(number[i]);
        else for (var j = 0; j < number[i]; j++)
            join = numberModel[1][
                (Math.random() * (j == 0 ? 3 : 4)) | 0
            ] + join;
        result += i == (negative ? 1 : 0) ? join : `+b+(${join})`;
    }
    return `${negative ? "-" : "+"}(${result})`;
}
In.oninput();