const API_KEY = '10f6488514e68084fc563f516e9d780a';

const requests = {
    fetchPopular: `discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
};

export default requests;