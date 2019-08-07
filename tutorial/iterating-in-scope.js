function randomTaskRowsAndNumber() {
    const randomNumber = Math.ceil(Math.random() * 3 + 2);
    for (i = 0; i < randomNumber; ++i) {
        const textToCopy = Math.random().toString().slice(0, 11);
        document.querySelector('#taskRows').innerHTML += `<div class="row"><div class="textToCopyContainer"><p class="textToCopy">${textToCopy}</p></div><div class="inputField"><input class="inputFormField" type="text" name="inputText" required></div></div></br><div class="errorMessage badge badge--red--outline">Error: Please input requested text</br></div>`;
    }
 }
randomTaskRowsAndNumber();

document.querySelector('[name=submitButton]').onclick = verifyAndHandle;

function verifyAndHandle () {
    const taskRowsNumber = document.querySelectorAll('.row').length;
    for (i = 0; i < taskRowsNumber; ++i) {
        const pattern = document.querySelectorAll('.textToCopy')[i].innerText;
        const inputText = document.getElementsByClassName("inputFormField")[i].value;
        document.getElementsByClassName("errorMessage")[i].style.display = "none";
        if (pattern !== inputText) {
            event.preventDefault();
            document.getElementsByClassName("errorMessage")[i].style.display = "block";
        }
    }
}
