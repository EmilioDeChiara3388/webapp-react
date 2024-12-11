import Banner from "../components/Banner";

export default function MoviesPage() {
    return (
        <>
            <Banner title="Film per Tutti" subtitle="Dicci che ne pensi!" description="Una community per condividere pareri su tanti films..." />
            <div className="container min-vh-100">
                <h3>Cards con i films</h3>
            </div>
        </>
    )
}