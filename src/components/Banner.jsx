export default function Banner({ title, subtitle, description }) {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}