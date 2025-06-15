// let movies = fetch('https://api.themoviedb.org/3/movie/popular?api_key=b502736b7dc66230d5d6deb21358a72a')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


let movieByPopularity = async() => {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b502736b7dc66230d5d6deb21358a72a');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    let data = await response.json(); 
    console.log(data);

    let parentDiv = document.getElementsByClassName('popularMovies')[0];
    
    data.results.forEach(movie => {
        let movielist = document.createElement('div');
        movielist.className = 'movielist';
        let movieImg = document.createElement('img');
        let movieTitle = document.createElement('h3');
    
        movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieTitle.textContent = movie.title;

        movielist.appendChild(movieImg);
        movielist.appendChild(movieTitle);
        parentDiv.appendChild(movielist);
    });
}

movieByPopularity();