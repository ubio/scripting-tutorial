function insertTaskRows() {
    const taskRowsNumber = Math.ceil(Math.random() * 3 + 2);
    for (i = 0; i < taskRowsNumber; ++i) {
        const randomInputNumber = Math.ceil(Math.random() * 15 + 10);
        const randomStartNumber = Math.ceil(Math.random() * ((randomInputNumber + 6) - (randomInputNumber - 6)) + (randomInputNumber - 5));
        document.querySelector('#mid-container').innerHTML += `<div class="task-row">
        <div id="value-container">
            <div class="value-element input-value">${randomInputNumber}</div>
            <div id="arrow-container" class="arrow">&#8594;</div>
            <div class="value-element"><button class="button--primary button--primary value-button decrease-value">-</button></div>
            <div class="value-element submit-value">${randomStartNumber}</div>
            <div class="value-element"><button class="button--primary button--primary value-button increase-value">+</button></div>
        </div>
            <div class="match-error-message badge badge--red--outline">Error: Adjust value to match requested</div>
        </div>`;
    }
}
insertTaskRows();

function buttonsAssignFunctions() {
    const taskRowsNumber = document.querySelectorAll('.task-row');
    for (let i = 0; i < taskRowsNumber.length; i++) {
        const row = taskRowsNumber[i];
        row.querySelector('.increase-value').onclick = increaseValue;
        row.querySelector('.decrease-value').onclick = decreaseValue;
    }
    document.querySelector('#submit').onclick = verifyAndHandle;
}
buttonsAssignFunctions();

function increaseValue(event) {
    const startNumber = event.target.parentNode.previousElementSibling.innerText;
    const newValue = Number(startNumber) + 1;
    event.target.parentNode.previousElementSibling.innerText = newValue;
}

function decreaseValue(event) {
    const startNumber = event.target.parentNode.nextElementSibling.innerText;
    const newValue = Number(startNumber) - 1;
    event.target.parentNode.nextElementSibling.innerText = newValue;
}
function verifyAndHandle () {
    const taskRowsNumber = document.querySelectorAll('.task-row');
    for (let i = 0; i < taskRowsNumber.length; ++i) {
        const row = taskRowsNumber[i];
        const submitValue = row.querySelector('.submit-value').innerText;
        const inputNumber = row.querySelector('.input-value').innerText;
        console.log(inputNumber, submitValue);
        row.querySelector(".match-error-message").style.display = "none";
        if (Number(inputNumber) !== Number(submitValue)) {
            event.preventDefault();
            row.querySelector(".match-error-message").style.display = "block";
        }
    }
    const visibleErrorMessages = document.querySelectorAll(".task-row .match-error-message:not([style='display: none;'])").length;
    if (Number(visibleErrorMessages) < 1) {
        location.href = "date-picker.html";
    }
}
