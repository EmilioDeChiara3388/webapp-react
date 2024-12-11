import { Link } from "react-router-dom";

export default function MovieCard() {
    return (
        <>
            <div className="card p-3">
                <h3>Titolo Film (title)</h3>
                <span>Diretto da: (director)</span>
                <p>lorem10(abstract)</p>
                <Link to="movies/1" className="btn btn-dark btn-md">
                    <span>Vai alle recensioni!</span>
                </Link>
            </div>
        </>
    )
}