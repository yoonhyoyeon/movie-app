import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
    title: 'Detail'
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