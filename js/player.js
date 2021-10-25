/*function player(extension) {
    let trailer = "https://www.youtube.com/embed/"
    let video = trailer + extension
    let myPlayer = document.getElementById("player");
    myPlayer.innerHTML = '<iframe width="100%" height="100%" src= ' + video + ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

player("dp5J1FZnGVg")*/

const movies = document.getElementById('movies');

movies.addEventListener('click', (e) => {
    if (e.target.id !== 'movies'){
        alert('click');
    } 
});