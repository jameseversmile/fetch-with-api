let movies = fetch('https://api.themoviedb.org/3/movie/popular?api_key=b502736b7dc66230d5d6deb21358a72a')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
