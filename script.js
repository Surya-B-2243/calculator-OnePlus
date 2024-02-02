let keys = document.querySelectorAll("button");
const happy = document.getElementById("input");
input = document.getElementById("input");
output = document.getElementById("output");

function check(evt) {
    let keycode = evt.keyCode;
    if (keycode === 13) {
        if (input.value == "1+") {
            output.value = "NEVER SETTLE"
            oneplus();
        }
        output.value = eval(input.value);
    }
}
for (i = 0; i <= keys.length; i++) {
    let bob = keys[i];
    bob.addEventListener("click", () => {
        let valu = bob.dataset.key;
        if (valu == "AC") {
            input.value = ""
            output.value = ""
        } else if (valu == "delete") {
            input.value = input.value.slice(0, -1);

        } else if (valu == "equals") {
            if (input.value == "1+") {
                output.value = "NEVER SETTLE"
                oneplus();
            } else
                output.value = eval(input.value)

        } else {
            input.value += valu
        }
    })
}



function oneplus() {
    let baby = document.querySelector("body");
    baby.style.backgroundImage = 'url("bob.jpg")';
    baby.style.backgroundSize = 'cover';

}