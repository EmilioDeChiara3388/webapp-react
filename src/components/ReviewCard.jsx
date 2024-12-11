export default function ReviewCard() {
    return (
        <>
            <div className="card p-3">
                <h4 className="mb-3">Recensione di: (name)</h4>
                <p>Cosa ne pensa: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ullam?(text)</p>
                <strong>Voto: (vote) </strong>
                <span className="text-warning mt-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                </span>
            </div>
        </>
    )
}