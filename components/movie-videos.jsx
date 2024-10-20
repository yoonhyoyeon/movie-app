import  { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-videos.module.css'

const getVideos = async (id) => {
    console.log(`fetching videos ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

const MovieVideos = async ({id}) => {
    const videos = await getVideos(id);

    return (
    <div className={styles.container}>
        {videos.map((video) => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name}/>)}
    </div>
    );
}

export default MovieVideos;