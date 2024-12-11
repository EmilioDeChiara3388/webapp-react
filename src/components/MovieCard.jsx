import { Link } from "react-router-dom";

export default function MovieCard() {
    return (
        <>
            <div className="card p-3">
                <h3 className="mb-3">Titolo Film (title)</h3>
                <span className="mb-3">Diretto da: (director)</span>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.(abstract)</p>
                <Link to="movies/1" className="btn btn-dark btn-md">
                    <span>Vai alle recensioni!</span>
                </Link>
            </div>
        </>
    )
}