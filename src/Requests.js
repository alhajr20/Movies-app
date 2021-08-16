const API_KEY = '10f6488514e68084fc563f516e9d780a',
      baseURL = 'https://api.themoviedb.org/3/';

const requests = {
    fetchPopular: `${baseURL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchTopRated: `${baseURL}movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `${baseURL}discover/movie?api_key=${API_KEY}`,
    fetchComedyMovies: `${baseURL}discover/movie?api_key=${API_KEY}`,
    fetchHorrorMovies: `${baseURL}discover/movie?api_key=${API_KEY}`,
    fetchRomanceMovies: `${baseURL}discover/movie?api_key=${API_KEY}`,
    fetchDocumentaries: `${baseURL}discover/movie?api_key=${API_KEY}`,
};

export default requests;