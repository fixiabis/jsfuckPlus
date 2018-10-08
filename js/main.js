var input = document.getElementById("input");
var output = document.getElementById("output");
var execute = document.getElementById("execute");
var uglify = document.getElementById("uglify");

input.addEventListener("keydown", function (e) {
    if (e.which == 9) {
        e.preventDefault();
        input.value =
            input.value.substr(0, input.selectionStart) +
            "    " +
            input.value.substr(input.selectionStart, input.value.length);
    }
});

execute.addEventListener("click", function () {
    eval(output.value);
});