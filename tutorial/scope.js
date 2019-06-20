const textToCopy = Math.random().toString().slice(0, -6);
document.querySelector('.textToCopy').innerText = `${textToCopy}`;
document.querySelector('[name=inputText]').pattern = `${textToCopy}`;
const pattern = document.querySelector('[name=inputText]').pattern;
document.querySelector('[name=blaSubmit]').onclick = verifyAndHandle;
function verifyAndHandle () {
    const inputText = document.getElementsByClassName("inputFormField")[0].value;
    if (pattern !== inputText) {
        event.preventDefault();
        document.getElementsByClassName("errorMessage")[0].style.display = "block";
    }
}

document.querySelector('.inputFormField').onchange = handleChange;
function handleChange() {
    const pattern = document.querySelector('.inputFormField').pattern;
    const inputText = document.querySelector('.inputFormField').value;
    console.log(pattern, inputText);
    if (pattern !== inputText) {
        document.querySelector('.errorMessage').style.display = "block";
    } else {
        document.querySelector('.errorMessage').style.display = "none";
    }
}
