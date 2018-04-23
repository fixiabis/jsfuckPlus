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
    var content = this.value,
        strStart = "",
        strTemp = "",
        strTabs = "",
        enString = "";
    for (var i = 0; i < content.length; i++) {
        if (content[i].match(/\"|\'/)) {
            if (!strStart) {
                var j = i - 1;
                while (content[j] == " ") strTabs += content[j--];
                strStart = content[i];
            } else if (content[i - 1] == "\\")
                strTemp += content[i];
            else if (content[i] == strStart) {
                if (strTemp)
                    enString += enFuck(strTemp, strTabs);
                else
                    enString += `${randomO()}+${randomO()}`;
                strStart = strTemp = strTab = "";
            } else {
                strTemp += content[i];
            }
        } else if (strStart) strTemp += content[i];
        else enString += content[i];
    }
    var nums = enString.match(
        /(^|\W)(NaN|-NaN|Infinity|-Infinity|\d+.\d+.\d+|-\d+.\d+.\d+|\d+.\d+|-\d+.\d+|-\d+|\d+)/g
    );
    console.log(nums);
    if (nums)
        for (var i = 0; i < nums.length; i++) {
            var sym = nums[i].match(/\W/);
            sym = sym != null ? sym[0] : "";
            if (sym == "$") continue;
            enString = enString.replace(nums[i], sym + AB(getNum(nums[i].replace(sym, ""))));
        }
    var bools = enString.match(/(^|\W)(true|false)/g);
    if (bools)
        for (var i = 0; i < bools.length; i++) {
            var sym = bools[i].match(/\W/);
            sym = sym != null ? sym[0] : "";
            if (sym == "$") continue;
            console.log(sym);
            enString = enString.replace(bools[i], sym + (bools[i].match(/true/) ? "!" : "") + "!" + randomO());
        }
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
Exe.onclick = () => eval(Out.value);
document.querySelector("header").onclick = () => location = "index.html";
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