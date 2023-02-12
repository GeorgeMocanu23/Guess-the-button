function createButtons(input) {
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";
    let buttons = [];
    for (let i = 0; i < input; ++i) {
        const button = document.createElement("button");
        button.className = "btn btn-secondary";
        button.innerText = "Button " + (i + 1);
        buttonsContainer.appendChild(button);
        buttons.push(button);
    }
    return buttons;
}

function setWinningButton(buttons) {
    const winningButtonIndex = Math.floor(Math.random() * buttons.length);
    //buttons[winningButtonIndex].className += " btn-success";
    buttons[winningButtonIndex].onclick = function() {
        alert("You won!");
    };
    for (let i = 0; i < buttons.length; ++i) {
        if (i != winningButtonIndex) {
            buttons[i].onclick = function() {
                alert("Try again!");
            };
        }
    }
}

function enteredNumber() {
    const input = document.getElementById("entered-number").value;
    if (input > 0 && input <= 1000) {
        const buttons = createButtons(input);
        setWinningButton(buttons);
    } else {
        alert("Number " + input + " entered is not a valid number");
    }
}
