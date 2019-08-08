const randomInputNumber = Math.ceil(Math.random() * 15 + 10);
const randomStartNumber = Math.ceil(Math.random() * ((randomInputNumber + 6) - (randomInputNumber - 6)) + (randomInputNumber - 5));
document.querySelector('#submitValue').innerText = randomStartNumber;
document.querySelector('#taskMessage').innerText = `Click "+" or "-" buttons until the input is "${randomInputNumber}" and click "submit" button`;

document.getElementById('increaseValue').onclick = increaseValue;
document.getElementById('decreaseValue').onclick = decreaseValue;
document.getElementById('submit').onclick = verifyAndHandle;

function increaseValue() {
    const lastKnownValue = document.querySelector('#submitValue').innerText;
    const newValue = Number(lastKnownValue) + 1;
    document.querySelector('#submitValue').innerText = newValue;
}

function decreaseValue() {
    const lastKnownValue = document.querySelector('#submitValue').innerText;
    const newValue = Number(lastKnownValue) - 1;
    document.querySelector('#submitValue').innerText = newValue;
}

function verifyAndHandle () {
        const submitValue = document.getElementById('submitValue').innerText;
        if (randomInputNumber !== Number(submitValue)) {
            event.preventDefault();
            document.querySelector(".errorMessage").style.display = "block";
        }
        else location.href = "do-until-in-scope.html";
}
