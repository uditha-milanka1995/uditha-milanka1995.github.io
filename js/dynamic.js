jQueryBridget('flickity', Flickity, $);

$('.janaki-image-grid').flickity({
    cellAlign: 'center',
    initialIndex: 1,
    contain: true,
    wrapAround: true,
    pageDots: true,
    prevNextButtons: true,
    groupCells: 1,
});

function startFunction() {
    document.getElementById('header-section').style.display = "block";
    document.getElementById('hidden-menu-section').style.display = "none";
}

function clickFunction() {
    document.getElementById('header-section').style.display = "none";
    document.getElementById('hidden-menu-section').style.display = "flex";
    document.getElementById('hidden-menu').style.display = "flex";
    document.getElementById('hidden-section').style.display = "block";
}

function closeFunction() {
    document.getElementById('header-section').style.display = "block";
    document.getElementById('hidden-menu-section').style.display = "none";
    document.getElementById('hidden-section').style.display = "none";
}

// close-button