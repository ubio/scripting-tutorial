document.querySelector('.submitButton').onclick = handleSubmit;
function handleSubmit() {
    const pattern = document.querySelector('#inputFormField').pattern;
    const inputText = document.querySelector('#inputFormField').value;
    if (pattern !== inputText) {
        event.preventDefault();
        document.querySelector('.errorMessage').style.display = "block";
    }
}
document.querySelector('#inputFormField').onchange = handleChange;
function handleChange() {
    const pattern = document.querySelector('#inputFormField').pattern;
    const inputText = document.querySelector('#inputFormField').value;
    if (pattern !== inputText) {
        document.querySelector('.errorMessage').style.display = "block";
    } else {
        document.querySelector('.errorMessage').style.display = "none";
    }
}
