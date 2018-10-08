input.addEventListener("keypress", function () {
    output.value = transpile(input.value, 0);
});

uglify.addEventListener("click", function () {
    output.value = transpile(input.value, 1);
});

function transpile(strs, m) {
    strs = strs.split("").map(
        c => (
            (c = c.charCodeAt().toString(16)),
            c.length < 4 && (c = "0".repeat(4 - c.length) + c),
            c
        )
    ).join("");

    var r = "__[_____]";
    
    if (m == 0) {
        for (var str of strs)
            r += "\n" + (function (str) {
                var _ = ["_", "__", "___", "____"],
                    r = "";
                for (var c of str) {
                    c = parseInt(c, 16);
                    r += `${_[(c / 4) | 0]}[${_[c % 4]}]`;
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
