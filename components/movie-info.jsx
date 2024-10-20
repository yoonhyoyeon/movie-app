import { API_URL } from "../app/(home)/page";

const getMovie = async (id) => {
    console.log(`fetching movies ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const MovieInfo = async ({id}) => {
    const movie = await getMovie(id);

    return <h3>movie: {movie.title}</h3>
}

export default MovieInfo;