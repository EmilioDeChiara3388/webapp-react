import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
    return (
        <>
            <Banner title="Film per Tutti" subtitle="Dicci che ne pensi!" description="Una community per condividere pareri su tanti films..." />

            <section className="py-5">
                <div className="container min-vh-100">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <MovieCard />
                        </div>
                        <div className="col">
                            <MovieCard />
                        </div>
                        <div className="col">
                            <MovieCard />
                        </div>
                        <div className="col">
                            <MovieCard />
                        </div>
                        <div className="col">
                            <MovieCard />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}