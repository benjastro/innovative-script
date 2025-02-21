function createHomeButton() {
    let homelink = `${window.location.origin}/innovative-script/`;
    homelink = `${window.location.origin}`;
    let homeButton = document.createElement('button');
    homeButton.innerText = "Back to Home";
    homeButton.onclick = () => {
        location.href = homelink;
    };
    return homeButton;
}

function bodyPutHomeButton() {
    document.body.appendChild(createHomeButton());
}

function putHomeButton(containerId) {
    document.getElementById(containerId).appendChild(createHomeButton());
}