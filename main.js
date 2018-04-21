var In = document.querySelector("#i"),
    Out = document.querySelector("#o"),
    Exe = document.querySelector("#e");
In.onkeydown = function (event) {
    if (event.which == 9) {
        event.preventDefault();
        var content = this.value,
            start = this.selectionStart,
            end = this.selectionEnd;
        if (start != end) return;
        var fContent = content.substr(0, start),
            bContent = content.substr(start, content.length);
        this.value = fContent + "    " + bContent;
        this.selectionStart = start + 4;
        this.selectionEnd = start + 4;
    }
    this.oninput && this.oninput();
};
Out.onkeydown = In.onkeydown;
In.oninput = function () {
    var content = this.value;
    content = content.replace(/\"\"|\'\'/g, "[]+[]");
    function en(content, sym) {
        var enString = "";
        for (var i = 0; i < content.length; i++) {
            if (!content) continue;
            if (i % 2 == 0) enString += content[i];
            else {
                if (content.length % 2 == 0 && i == content.length - 1) {
                    enString += sym + content[i];
                    break;
                }
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
        return enString;
    }
    var enString = en(content.split("\""), "\"");
    if (enString.includes("\'")) enString = en(enString.split("\'"), "\'");
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
In.value = `/* example */
(___ => {
    ___["a"] = 5;
    $$_(0, $ => $ < 5)($ => { //for loop
        ___["a"] += $;
    });
    _[
        "alert"
    ](___["a"]);
})({});`;
Exe.onclick = function () {
    eval(Out.value);
};
document.querySelector("header").onclick = function () {
    location = "index.html";
};
function enFuck(content, tabs) {
    var enContent = "";
    for (var i = 0; i < content.length; i++) {
        if (content[i] == "\\") {
            enContent += getChr(eval(`"${"\\" + content[++i]}}"`));
        } else enContent += getChr(content[i]);
        if (i < content.length - 1) enContent += "+\n" + tabs;
    }
    return AB(enContent);
}