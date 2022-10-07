import './SkillCard.css';

export default function SkillCard({ title, subtitle, paragraph, children }) {
    return (
        <article className="card">
            <div className="card__container">
                <div className="card__text">
                    <h2 className="card__title">{title}</h2>
                    <h3 className="card__subtitle">{subtitle}</h3>
                    <p className="card__paragraph">{paragraph}</p>
                </div>

                <div className="card__icon-container">
                    <div className="card__icon-square" />
                    {children}
                </div>
            </div>
        </article>
    )
}