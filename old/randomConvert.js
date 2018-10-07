var charModel = {
    "a": [
        ["!b", 1],
        ["b[c]", 12],
        ["(!b)[c]", 14],
        ["+b[b]", 1],
        ["$_", 24],
        ["$_()", 9],
        ["_$$", 8],
    ],
    "b": [
        ["b+a", 2],
        ["b+a", 9],
        ["(+b)[c]", 12],
        ["({})[c]", 10],
    ],
    "c": [
        ["b+a", 5],
        ["b+a", 12],
        ["({})[c]", 3],
        ["({})[c]", 13],
        ["({})[c]", 28],
        ["$_()", 3],
        ["c", 0],
        ["c", 7],
    ],
    "d": [
        ["b[b]+b", 2],
        ["b[b]+b", 8],
        ["$_", 32],
    ],
    "e": [
        ["!b", 4],
        ["!!b", 3],
        ["b[b]+b", 3],
        ["b[b]+b", 7],
        ["({})[c]", 12],
        ["({})[c]", 31],
        ["(+b)[c]", 31],
        ["b+a", 4],
        ["b+a", 11],
        ["_$$", 5],
        ["_$$", 10],
        ["(!b)[c]", 13],
        ["(!b)[c]", 27],
        ["(!b)[c]", 32],
    ],
    "f": [
        ["!b", 0],
        ["b[b]+b", 4],
        ["$_", 0],
        ["$_()", 0],
    ],
    "g": [
        ["_$", 7],
        ["(b+b)[c]", 14],
    ],
    "i": [
        ["b[b]+b", 5],
        ["$_", 5],
        ["$_", 14],
        ["$_", 26],
        ["$_()", 5],
        ["(b+b)[c]", 5],
        ["(b+b)[c]", 12],
        ["(b+b)[c]", 24],
        ["_$", 5],
    ],
    "j": [
        ["b+a", 3],
        ["b+a", 10],
        ["({})[c]", 11],
    ],
    "l": [
        ["!b", 2],
        ["(!b)[c]", 12],
    ],
    "m": [
        ["(+b)[c]", 11],
        ["$_()", 14],
    ],
    "n": [
        ["b[b]+b", 1],
        ["b[b]+b", 6],
        ["(!b)[c]", 2],
        ["(!b)[c]", 7],
        ["(!b)[c]", 15],
        ["(!b)[c]", 22],
        ["$_()", 2],
        ["$_()", 7],
        ["$_()", 10],
        ["$_()", 12],
        ["$_", 2],
        ["$_", 7],
        ["$_", 11],
        ["$_", 16],
        ["$_", 23],
        ["(b+b)[c]+b", 2],
        ["(b+b)[c]+b", 7],
        ["(b+b)[c]+b", 13],
        ["(b+b)[c]+b", 21],
        ["_$", 6],
        ["c", 2]
    ],
    "o": [
        ["b+a", 1],
        ["$_()", 6],
        ["$_()", 11],
        ["$_()", 15],
        ["$_", 6],
        ["$_", 15],
        ["$_", 31],
        ["c", 1],
        ["c", 9],
        ["_$$", 1],
        ["_$", 1],
        ["(!b)[c]", 6],
        ["(!b)[c]", 10],
        ["(!b)[c]", 11],
        ["(!b)[c]", 30],
    ],
    "p": [
        ["_$$", 3],
        ["_$$", 4]
    ],
    "r": [
        ["!!b", 1],
        ["b[c]", 10],
        ["b[c]", 11],
        ["_$", 4],
        ["(b+b)[c]", 11],
        ["(+b)[c]", 14],
        ["_$$", 6],
        ["c", 5],
        ["c", 10],
    ],
    "s": [
        ["!b", 3],
        ["$_()", 17],
        ["_$$", 9],
    ],
    "t": [
        ["!!b", 0],
        ["({})[c]", 4],
        ["({})[c]", 14],
        ["({})[c]", 23],
        ["$_", 4],
        ["$_", 13],
        ["$_", 25],
        ["(b+b)[c]", 4],
        ["(b+b)[c]", 10],
        ["(b+b)[c]", 23],
        ["b+a", 6],
        ["b+a", 13],
        ["$_()", 4],
        ["$_", 4],
        ["$_", 13],
        ["$_", 25],
        ["_$", 0],
        ["_$", 3],
        ["_$$", 0],
        ["c", 4],
        ["c", 8],
    ],
    "u": [
        ["b[b]+b", 0],
        ["!!b", 2],
        ["$_()", 1],
        ["$_()", 16],
        ["$_", 1],
        ["$_", 10],
        ["(+b)[c]", 1],
        ["(+b)[c]", 10],
        ["c", 6],
    ],
    "v": [
        ["$_", 27]
    ],
    "y": [
        ["b[__]", 13],
        ["$_()", 13],
    ],
    "A": [
        ["b[__]", 9]
    ],
    "B": [
        ["(!b)[__]", 9]
    ],
    "C": [
        ["_$$", 7]
    ],
    "F": [
        ["$_", 9]
    ],
    "N": [
        ["+b[b]", 0],
        ["+b[b]", 2],
        ["(+b)[c]", 9],
    ],
    "O": [
        ["b+a", 8],
        ["({})[c]", 9],
    ],
    "S": [
        ["(b+b)[c]", 9],
        ["_$", 2]
    ],
    "U": [
        ["_$$", 2]
    ],
    "(": [
        ["$_", 17],
        ["(()=>{})", 0]
    ],
    ")": [
        ["$_", 18],
        ["(()=>{})", 1]
    ],
    "{": [
        ["$_", 20],
        ["(()=>{})", 4]
    ],
    "}": [
        ["$_", 36],
        ["(()=>{})", 5]
    ],
    ";": [
        ["(_=>{;})", 4],
        ["($=>{;})", 4],
        ["(()=>{;})", 5]
    ],
    "[": [
        ["b+a", 0],
        ["$_", 22],
        ["(()=>[])", 4]
    ],
    "]": [
        ["b+a", 14],
        ["$_", 34],
        ["(()=>[])", 5]
    ],
    " ": [
        ["b+a", 7]
    ]
}, numberModel = [
    ["+b", "~~b", "+!b", "~~!b"],
    ["+!+b", "+!!b", "-~b", "-~"]
];
for (var i of "$_+-*/&|^<>=.~!?:") charModel[i] = [];
for (var i of "$_")
    for (var j of "$_") {
        var c = `(${i}=>${j})`,
            $i = c.indexOf("$") - 1,
            _i = c.indexOf("_") - 1,
            i$ = c.lastIndexOf("$") - 1,
            i_ = c.lastIndexOf("_") - 1;
        if ($i > -1) charModel["$"].push([c, $i]);
        if (_i > -1) charModel["_"].push([c, _i]);
        if (i$ > -1 && i$ != $i) charModel["$"].push([c, i$]);
        if (i_ > -1 && i_ != _i) charModel["_"].push([c, i_]);
        for (var k of "~!") {
            var c = `(${i}=>${k}${j})`,
                n = c.indexOf(k);
            charModel[k].push([c, 3]);
        }
        for (var k of "$_") {
            for (var l of "+-*/&|^<.") {
                var c = `(${i}=>${j}${l}${k})`;
                charModel[l].push([c, 4]);
            }
            for (var l of "=>") {
                var c = `(${i}=>${j}${l}${k})`,
                    n = c.indexOf(l) - 1;
                charModel[l].push([c, n]);
                charModel[l].push([c, 4]);
            }
            for (var l of "$_") {
                var c = `(${i}=>${j}?${k}:${l})`;
                charModel["?"].push([c, 4]);
                charModel[":"].push([c, 6]);
            }
        }
    }
function AB(content) {
    while (content.match(/a|b|c/))
        content = content
            .replace("a", randomO("{}"))
            .replace("b", randomO())
            .replace("c", randomO("__"));
    return content;
}
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
    if (char in charModel && ((Math.random() * 2) | 0)) {
        var select = (Math.random() * charModel[char].length) | 0;
        return `(${
            randomO(charModel[char][select][0])
            }+b)[${
            getNum(charModel[char][select][1])
            }]`;
    }
    if (char.match(/[a-z]/) && ((Math.random() * 2) | 0)) {
        var code = char.charCodeAt() - 87;
        return `(${
            getNum(code)
            })[_$](${
            getNum(code + 1)
            })`;
    }
    if (char.match(/[A-Z]/) && ((Math.random() * 2) | 0)) {
        var charLower = char.toLowerCase();
        return `${getChr(charLower)}[_$$]()`;
    }
    if (char.match(/\d/) && ((Math.random() * 2) | 0)) {
        return `${getNum(char)}+b`;
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
        negative = number[0] == "-";
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