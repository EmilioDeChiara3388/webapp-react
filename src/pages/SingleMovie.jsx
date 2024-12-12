import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";

export default function SingleMovie() {

    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data)
            })
            .catch((error) => console.error("Errore nel caricamento:", error));
    })

    return (
        <>
            <Banner title={movie.title} subtitle="La community si è espressa!" description="Le recensioni dei nostri utenti." />
            <section className="py-5">
                <div className="container min-vh-100">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {movie.reviews && movie.reviews.map(review =>
                            <div className="col" key={review.id}>
                                <ReviewCard review={review} />
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}