import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";

export default function SingleMovie() {
    return (
        <>
            <Banner title="Film Selezionato" subtitle="La community si è espressa!" description="Le recensioni dei nostri utenti." />
            <div className="container min-vh-100">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <ReviewCard />
                    </div>
                    <div className="col">
                        <ReviewCard />
                    </div>
                    <div className="col">
                        <ReviewCard />
                    </div>
                    <div className="col">
                        <ReviewCard />
                    </div>
                    <div className="col">
                        <ReviewCard />
                    </div>
                </div>
            </div>
        </>
    )
}