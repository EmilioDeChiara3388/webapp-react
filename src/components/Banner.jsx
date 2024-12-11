export default function Banner({ title, subtitle, description }) {
    return (
        <>
            <div className="banner mt-4">
                <div className="container">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <p className="fs-5 fst-italic">{description}</p>
                </div>
            </div>
        </>
    )
}