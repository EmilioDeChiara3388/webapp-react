export default function ReviewCard({ review }) {
    return (
        <>
            <div className="card p-3">
                <h4 className="mb-3"><strong>Recensione di: </strong>{review.name}</h4>
                <p><strong>Cosa ne pensa: </strong>{review.text}</p>
                <strong>Voto: {review.vote}/5 </strong>
            </div>
        </>
    )
}