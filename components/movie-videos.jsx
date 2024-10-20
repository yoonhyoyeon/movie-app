import  { API_URL } from '../app/(home)/page';

const getVideos = async (id) => {
    console.log(`fetching videos ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    throw new Error('something broke..');
    return response.json();
}

const MovieVideos = async ({id}) => {
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>
}

export default MovieVideos;