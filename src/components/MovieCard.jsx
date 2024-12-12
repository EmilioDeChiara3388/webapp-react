import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <>
            <div className="card p-3" style={{ minHeight: "280px" }}>
                <h3 className="mb-3">{movie.title}</h3>
                <span className="mb-3"><strong>Diretto da: </strong>{movie.director}</span>
                <div style={{ minHeight: "100px" }}>
                    <p className="mb-4">{movie.abstract}</p>
                </div>
                <Link to={`movies/${movie.id}`} className="btn btn-dark btn-md">
                    <span>Vai alle recensioni!</span>
                </Link>
            </div>
        </>
    )
}