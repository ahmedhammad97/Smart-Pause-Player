let data = window.location.href.split('?$$')[1];
let type = data.split('&#&')[0].split('=#=')[1];
let path = data.split('&#&')[1].split('=#=')[1];

var mainContainer = document.querySelector('main');

if (type == "local") {
    localVideoProcedure(path);
}
else if (type === "ytube") {
    ytubeVideoProcedure(path);
}
else {alert("Something went wrong!");}


function localVideoProcedure(localPath) {
    mainContainer.innerHTML = `
    <video id="player" playsinline controls>
        <source src="${localPath}" type="video/mp4" />
        <source src="${localPath}" type="video/ogg" />
    </video>
    `
}

function ytubeVideoProcedure(url) {
    // https://www.youtube.com/watch?v=OtDxDvCpPL4
    console.log(url);
    let id = url.split('?')[1].slice(2);
    mainContainer.innerHTML = `
    <div class="plyr__video-embed" id="player">
        <iframe
            src="https://www.youtube.com/embed/${id}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
            allowtransparency
            allow="autoplay"
        ></iframe>
    </div>
    `
}