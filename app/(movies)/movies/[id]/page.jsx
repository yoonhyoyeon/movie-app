import { Suspense } from "react";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({params:{id}}) {
    const movie = await getMovie(id);
    return {
        title: movie.title
    };
}

const movieDetail = ({params: { id }}) => {

    return (
        <div>
            <Suspense fallback={<h3>Loading movie...</h3>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h6>Loading videos...</h6>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}

export default movieDetail;