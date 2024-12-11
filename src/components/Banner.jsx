export default function Banner({ title, subtitle, description }) {
    return (
        <>
            <div className="banner mt-4">
                <div className="container">
                    <h2 className="mb-3">{title}</h2>
                    <h4 className="mb-3">{subtitle}</h4>
                    <p className="fs-5 fst-italic mb-3">{description}</p>
                </div>
            </div>
        </>
    )
}