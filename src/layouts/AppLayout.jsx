import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <header>
                <h1>Films</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <h3>Tutti i diritti riservati</h3>
            </footer>
        </>
    )
}