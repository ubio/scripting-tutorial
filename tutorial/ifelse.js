function tickCheckBox(element) {
    element.checked = true;
}
function randomTickCheckBoxes() {
    const checkBoxes = document.getElementsByClassName("checkBox");
    for (i = 0; i < checkBoxes.length; ++i) {
        const random = Math.random();
        if (random >= 0.5) {
            tickCheckBox(checkBoxes[i]);
        }
    }
    checkBoxes[Math.floor(Math.random() * checkBoxes.length)].checked = false;
}
randomTickCheckBoxes();

document.querySelector(".submitButton").onclick = errorCheck;
function errorCheck() {
    const checkBoxes = document.getElementsByClassName("checkBox");
    for (i = 0; i < checkBoxes.length; ++i) {
        if (checkBoxes[i].checked !== true) {
            event.preventDefault();
            document.querySelector('.errorMessage').style.display = "block";
        }
    }
}