import Link from 'next/link';

export const metadata = {
    title: "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('fetching');
    const res = await fetch(API_URL);
    const data = res.json();
    return data;

    // return fetch(URL).then((res) => res.json()).then((data) => {
    //     return data;
    // }).catch((error)=> {
    //     console.error(error);
    // });
}

export default async function Hompage() {
    const movies = await getMovies();
    console.log('hi this is home');
    // const [movies, setMovies] = useState();
    // const [isLoading, setIsLoading] = useState(true);

    // // const getMovies = async () => {
    // //         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    // //         const json = await response.json();
    // //         setMovies(json);
    // //         console.log(json);
    // //         setIsLoading(false);
    // // }

    // const getMovies = () => {
    //     const response = fetch("https://nomad-movies.nomadcoders.workers.dev/movies").then(res => {
    //         return res.json()
    //     }).
    //     then((data) => {
    //         data
    //         setMovies(data);
    //         console.log(data);
    //         setIsLoading(false);
    //     }).catch((error) => {
    //         console.error(error);
    //     })
    // }
    // useEffect(() => {
    //     getMovies();
    // }, []);
    return (
        <div>
            {movies.map((movie) => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    )
}