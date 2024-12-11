import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/movies")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.movies);
            })
            .catch((error) => console.error("Errore nel fetch dei film:", error));
    }, []);

    return (
        <>
            <Banner title="Film per Tutti" subtitle="Dicci che ne pensi!" description="Una community per condividere pareri su tanti films..." />

            <section className="py-5">
                <div className="container min-vh-100">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {movies.map((movie) => (
                            <div className="col" key={movie.id}>
                                <MovieCard
                                    id={movie.id}
                                    title={movie.title}
                                    director={movie.director}
                                    abstract={movie.abstract}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}