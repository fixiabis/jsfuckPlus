var input = document.getElementById("input");
var output = document.getElementById("output");
var execute = document.getElementById("execute");
var uglify = document.getElementById("uglify");

input.addEventListener("keydown", function (e) {
    if (e.which == 9) {
        e.preventDefault();
        var selectionStart = input.selectionStart;
        input.value =
            input.value.substr(0, selectionStart) +
            "    " +
            input.value.substr(selectionStart, input.value.length);
        input.selectionStart = selectionStart;
        input.selectionEnd = selectionStart;
        
    }
});

execute.addEventListener("click", function () {
    eval(output.value);
});