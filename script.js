const searchbtn = document.getElementById('searchbtn');
const moviebar = document.getElementById('movie');

searchbtn.addEventListener('click', async () => {
    console.log("THIS BUTTON IS WORKING AAAAHHH");
    const movie = moviebar.value.trim().toLowerCase();
    await fetchMovie(movie);
});

async function fetchMovie(movie) {
    const dataURL = `http://www.omdbapi.com/?t=${movie}&apikey=ebe29517`;

    try {
        const response = await fetch(dataURL);

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();

        const title = data.Title;
        const year = data.Year;
        const rate = data.Rated;
        const release = data.Released;
        const time = data.Runtime;
        const Genre = data.Genre;
        const Actors = data.Actors;
        const Plot = data.Plot;
        const Language = data.Language;
        const Poster = data.Poster;
        // const Ratings = data.Ratings;

        document.getElementById('movie-container').innerHTML = `
        <h2>${title}</h2>
        <img src="${Poster}" style="max-width: 100%;"></img>
        <h4>${year}</h4>  <h4>Rating : ${rate}</h4>
        <h4>Realeased on: ${release}</h4>  <h4>Duration: ${time}</h4>
        <h4>Genre: ${Genre}</h4> <h4>Actors : ${Actors}</h4>
        <p>Plot: ${Plot}</p> <h4>Language: ${Language}</h4>
        
        `;
    } catch (error) {
        console.error(error);
    }
}

/* 
        <img src="${Poster}" style="max-width: 100%;"></img> */