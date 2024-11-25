// ჩანაცვლე შენი OMDb API გასაღებით
const API_KEY = '9a380a2f';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=horror&type=movie`;

async function getHorrorMovies() {
    try {
        console.log('Fetching data from OMDb API...');
        const response = await fetch(API_URL);
        
        console.log('Response received:', response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const movies = data.Search; // ფილმების მონაცემები Search ველშია

        console.log('Horror Movies fetched:', movies);

        const movieList = document.getElementById('movie-list');
        if (!movieList) {
            console.error('Element #movie-list not found in DOM');
            return;
        }

        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = `${movie.Title} (${movie.Year})`;
            movieList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

getHorrorMovies();
