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
}