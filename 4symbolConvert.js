var In = document.querySelector("#i"),
    Out = document.querySelector("#o"),
    Exe = document.querySelector("#e"),
    Chg = document.querySelector("#g"),
    mode = 0;
In.onkeydown = function () {
    var strs = this.value.split("");
    for (var i = 0; i < strs.length; i++) {
        var charCode = strs[i].charCodeAt().toString(16),
            zero = "0".repeat(4 - charCode.length);
        strs[i] = zero + charCode;
    }
    Out.value = convert(strs, mode);
};
Chg.onclick = function () {
    mode++;
    if (mode == 2) mode = 0;
    In.onkeydown();
};
Exe.onclick = function () {
    eval(Out.value);
}
function convert(strs, m) {
    var r = "_[_____]";
    if (m == 0) {
        for (var str of strs)
            r += "\n" + (function (str) {
                var _ = ["_", "__", "___", "____"],
                    r = "";
                for (var c of str) {
                    c = parseInt(c, 16);
                    r += `${_[(c / 4) | 0]}[${_[c % 4]}]\n`;
                }
                return r;
            })(str);
        return r + "\n_[_____]";
    } else {
        for (var str of strs)
            r = (function (str, cat) {
                var _ = ["_", "__", "___", "____"],
                    r = "";
                for (var c of str) {
                    c = parseInt(c, 16);
                    r = `${_[(c / 4) | 0]}[${((r && r + ",") || cat + ",")}${_[c % 4]}]`;
                }
                return r;
            })(str, r);
        return `_[${r},_____]`;
    }
}
