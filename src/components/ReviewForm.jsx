import { useState } from "react"

export default function ReviewForm({ movie_id }) {

    const [userName, setUserName] = useState("")
    const [review, setReview] = useState("")
    const [vote, setVote] = useState(0)
    const [okMessage, setOkMessage] = useState("")

    function HandleForm(e) {
        e.preventDefault()

        const formData = {
            name: userName,
            text: review,
            vote
        }

        fetch(`http://localhost:3000/api/movies/${movie_id}/reviews`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    setOkMessage('Grazie per la tua recensione!')
                }
            }).catch(err => console.log(err))
    }

    return (
        <>
            <div className="container my-5">

                {okMessage && <div>{okMessage}</div>}

                <h3 className="mb-3">Inserisci la tua recensione</h3>
                <form onSubmit={HandleForm} className="card mb-3 p-3">
                    <div>
                        <label htmlFor="username">User Name</label>
                        <input type="text" className="form-control mb-3 mt-2 w-25" name="username" id="username" placeholder="Inserisci il tuo username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="review">La tua recensione</label>
                        <textarea className="form-control mb-3 mt-2 w-50" name="review" id="review" placeholder="Inserisci la tua recensione" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="vote">Il tuo voto</label>
                        <input type="text" className="form-control mb-3 mt-2 w-25" name="vote" id="vote" placeholder="Il tuo voto" value={vote} onChange={(e) => setVote(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-dark btn-sm">Invia!</button>
                    </div>
                </form>
            </div>
        </>
    )
}