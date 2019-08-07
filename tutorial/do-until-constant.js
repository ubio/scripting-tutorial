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
        const constantNumber = 10;
        const submitValue = document.getElementById('submitValue').innerText;
        console.log(submitValue);
        if (constantNumber !== Number(submitValue)) {
            event.preventDefault();
            document.querySelector(".errorMessage").style.display = "block";
        }
        else location.href = "do-until-random.html";
}
