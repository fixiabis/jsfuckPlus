input.addEventListener("input", function () {
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

    var r = "$$($$$$$)";
    
    if (m == 0) {
        for (var str of strs)
            r += "\n" + (function (str) {
                var $ = ["$", "$$", "$$$", "$$$$"],
                    r = "";
                for (var c of str) {
                    c = parseInt(c, 16);
                    r += `${$[(c / 4) | 0]}(${$[c % 4]})`;
                }
                return r;
            })(str);
        return r + "\n$($$$$$)";
    } else {
        for (var str of strs)
            r = (function (str, cat) {
                var $ = ["$", "$$", "$$$", "$$$$"],
                    r = "";
                for (var c of str) {
                    c = parseInt(c, 16);
                    r = `${$[(c / 4) | 0]}((${((r && r + ",") || cat + ",")}${$[c % 4]}))`;
                }
                return r;
            })(str, r);
        return `$((${r},$$$$$))`;
    }
}
