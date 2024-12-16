import { useState, useEffect, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function MoviesPage() {

    const [movies, setMovies] = useState([])
    const [okMessage, setOkMessage] = useState("")
    const { loading, setLoading } = useContext(GlobalContext)

    useEffect(() => {

        setLoading(true)

        fetch("http://localhost:3000/api/movies")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.movies);
                setLoading(false)
            })
            .catch((error) => console.error("Errore nel caricamento:", error));
    }, [okMessage]);

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Banner title="Film per Tutti" subtitle="Dicci che ne pensi!" description="Una community per condividere pareri su tanti films..." />

                    <section className="py-5">
                        <div className="container min-vh-100">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {movies.map((movie) => (
                                    <div className="col" key={movie.id}>
                                        <MovieCard movie={movie} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>

            )}
        </>
    )
}