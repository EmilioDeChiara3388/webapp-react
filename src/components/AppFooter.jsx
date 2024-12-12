import { Link } from "react-router-dom"
export default function AppFooter() {
    return (
        <footer className="bg-dark text-white p-4 justify-content-start">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    <div className="col p-2">
                        <h3>Film per Tutti</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque accusantium. Id repellat exercitationem libero. Amet aperiam iure impedit temporibus?</p>
                    </div>
                    <div className="col p-2">
                        <h4>Su di noi:</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-white">Chi siamo</a></li>
                            <li><a href="#" className="text-decoration-none text-white">Infos</a></li>
                            <li><a href="#" className="text-decoration-none text-white">Contatti</a></li>
                        </ul>
                    </div>
                    <div className="col p-2">
                        <h4 className="mb-3">Seguici!</h4>
                        <i className="m-2 bi bi-facebook"></i>
                        <i className="m-2 bi bi-twitter"></i>
                        <i className="m-2 bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}



