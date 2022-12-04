function startFunction() {
    document.getElementById('header-section').style.display = "block";
    document.getElementById('hidden-menu-section').style.display = "none";
}

function clickFunction() {
    document.getElementById('header-section').style.display = "none";
    document.getElementById('hidden-menu-section').style.display = "flex";
    document.getElementById('hidden-menu').style.display = "flex";

}

function closeFunction() {
    document.getElementById('header-section').style.display = "block";
    document.getElementById('hidden-menu-section').style.display = "none";
    document.getElementById('hidden-menu').style.display = "none";

}

// close-button