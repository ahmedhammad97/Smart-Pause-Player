window.onload = function() {
    setupOptionsEventListeners();
    setupButtonsEventListeners();
}

function setupOptionsEventListeners() {
    document.querySelector('.local img').addEventListener('click', localClickHandler);
    document.querySelector('.ytube img').addEventListener('click', ytubeClickHandler);
}

function localClickHandler() {
    document.querySelector('.ytubelink').style.display = 'none';
    document.querySelector('.fileselector').style.display = 'block';
}

function ytubeClickHandler() {
    document.querySelector('.fileselector').style.display = 'none';
    document.querySelector('.ytubelink').style.display = 'block';
}

function setupButtonsEventListeners() {
    document.querySelector('.fileselector button').addEventListener('click', localPlay);
    document.querySelector('.ytubelink button').addEventListener('click', ytubePlay);
}

function localPlay() {
    let file = document.querySelector('input[name=path]').files[0];
    let path = file !== undefined ? file.path : undefined;
    if (pathValid(path)) {
        window.location.href = "../player/index.html?$$type=#=local&#&path=#=" + path;
    }
    else {
        alert("Wrong or empty file path!");
    }
}

function ytubePlay() {
    let url = document.querySelector('input[name=link]').value;
    if (urlValid(url)) {
        window.location.href = "../player/index.html?$$type=#=ytube&#&url=#=" + url;
    }
    else {
        alert("Wrong or invalid url!");
    }
}

function pathValid(path) {
    let extension = path.slice(-3).toUpperCase();
    if (extension !== 'MP4' && extension !== 'OGG') return false;
    return true;
}

function urlValid(url) {
    if (url !== undefined || url !== '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match && match[2].length == 11;
    }
}