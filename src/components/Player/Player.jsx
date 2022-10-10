import './Player.css';

export default function Player({ name, country, src, children, on }) {
    let nameClassName;
    let countyClassName;

    function setNameClassName() {
        if (name === 'JETT') {
            nameClassName = 'player__name_jett';
        } else if (name === 'SOVA') {
            nameClassName = 'player__name_sova'
        } else if (name === 'SAGE') {
            nameClassName = 'player__name_sage'
        }
    }

    setNameClassName();

    function setCountryClassName() {
        if (name === 'JETT') {
            countyClassName = 'player__country_jett';
        } else if (name === 'SOVA') {
            countyClassName = 'player__country_sova'
        } else if (name === 'SAGE') {
            countyClassName = 'player__country_sage'
        }
    }

    setCountryClassName();

    return (
        <article className='player__section'>
            <h2 className={`player__name ${nameClassName} ${on ? 'player__name_on' : ''}`}>{name}</h2>
            <div className="player">
                <div className={`player__container ${on ? 'player__container_on' : ''}`}>
                    <img className="player__art" src={src} alt="персонаж." />
                    <p className={`player__country ${countyClassName}`}>{country}</p>
                </div>
            </div>
            <div className={`player__skills ${on ? 'player__skills_on' : ''}`}>
                {children}
            </div>
        </article>
    )
}