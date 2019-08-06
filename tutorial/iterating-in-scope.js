function randomTaskRowsAndNumber() {
    const randomNumber = Math.ceil(Math.random() * 3 + 2);
    for (i = 0; i < randomNumber; ++i) {
        const textToCopy = Math.random().toString().slice(0, 11);
        document.querySelector('#taskRows').innerHTML += `<div class="row"><div class="textToCopyContainer"><p class="textToCopy">${textToCopy}</p></div><div class="inputField"><input class="inputFormField" type="text" name="inputText" required pattern="${textToCopy}"></div></div></br><div class="errorMessage badge badge--red--outline">Error: Please input requested text</br></div>`;
    }
 }
randomTaskRowsAndNumber();

const taskRowsNumber = document.querySelectorAll('.row').length;
document.querySelector('[name=submitButton]').onclick = verifyAndHandle;

function verifyAndHandle () {
    for (i = 0; i < taskRowsNumber; ++i) {
        const pattern = document.querySelectorAll('[name=inputText]')[i].pattern;
        const inputText = document.getElementsByClassName("inputFormField")[i].value;
        if (pattern !== inputText) {
            event.preventDefault();
            document.getElementsByClassName("errorMessage")[i].style.display = "block";
        }
    }
}
