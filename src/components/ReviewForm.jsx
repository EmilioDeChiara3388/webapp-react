export default function ReviewForm() {
    return (
        <>
            <div className="container my-5">
                <h3 className="mb-3">Inserisci la tua recensione</h3>
                <form className="card mb-3 p-3">
                    <div>
                        <label htmlFor="username">User Name</label>
                        <input type="text" className="form-control mb-3 mt-2 w-25" name="username" id="username" placeholder="Inserisci il tuo username" />
                    </div>
                    <div>
                        <label htmlFor="review">La tua recensione</label>
                        <textarea className="form-control mb-3 mt-2 w-50" name="review" id="review" placeholder="Inserisci la tua recensione"></textarea>
                    </div>
                    <div>
                        <label htmlFor="vote">Il tuo voto</label>
                        <input type="text" className="form-control mb-3 mt-2 w-25" name="vote" id="vote" placeholder="Il tuo voto" />
                    </div>
                    <div>
                        <button className="btn btn-dark btn-sm">Invia!</button>
                    </div>

                </form>
            </div>

        </>

    )
}