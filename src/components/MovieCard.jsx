import { Link } from "react-router-dom";

export default function MovieCard({ title, director, abstract, id }) {
    return (
        <>
            <div className="card p-3">
                <h3 className="mb-3">{title}</h3>
                <span className="mb-3">Diretto da: {director}</span>
                <p className="mb-4">{abstract}</p>
                <Link to={`movies/${id}`} className="btn btn-dark btn-md">
                    <span>Vai alle recensioni!</span>
                </Link>
            </div>
        </>
    )
}