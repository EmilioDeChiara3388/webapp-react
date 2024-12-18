import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Banner title="Errore 404" subtitle="Pagina non trovata." description="Ci dispiace, il percorso scelto non esiste..." />
            <div className="container mt-5 min-vh-100">
                <Link to="/" className="btn btn-dark btn-md">
                    <i className="bi bi-arrow-left"></i>
                    <span className="ms-2">Torna alla home</span>
                </Link>
            </div>
        </>
    )
}