import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function AppLayout() {
    return (
        <>
            <AppHeader />

            <main>
                <Outlet />
            </main>

            <footer>
                <h3>Tutti i diritti riservati</h3>
            </footer>
        </>
    )
}