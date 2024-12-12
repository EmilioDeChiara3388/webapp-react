import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <>
            <div className="card p-3">
                <h3 className="mb-3">{movie.title}</h3>
                <span className="mb-3"><strong>Diretto da: </strong>{movie.director}</span>
                <p className="mb-4">{movie.abstract}</p>
                <Link to={`movies/${movie.id}`} className="btn btn-dark btn-md">
                    <span>Vai alle recensioni!</span>
                </Link>
            </div>
        </>
    )
}