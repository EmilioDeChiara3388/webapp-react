import Banner from "../components/Banner";

export default function SingleMovie() {
    return (
        <>
            <Banner title="Film Selezionato" subtitle="La community si è espressa!" description="Le recensioni dei nostri utenti." />
            <div className="container min-vh-100">
                <h3>Cards con le recensioni</h3>
            </div>
        </>
    )
}