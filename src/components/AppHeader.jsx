import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="text-decoration-none">
                        <h4>Film per Tutti</h4>
                    </NavLink>
                </nav>
            </header>
        </>
    )
}