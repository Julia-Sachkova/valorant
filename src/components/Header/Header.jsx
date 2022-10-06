import './Header.css';

import riotLogo from '../../images/riot-logo.svg';
import vLogo from '../../images/v-logo.svg';
import avatar from '../../images/valorant.jpg'

export default function Header() {
    return (
        <header className="header">

            <div className="header__logos">
                <img src={riotLogo} alt="логотип" className="header__riot-logo" />
                <span className="header__separator" />
                <img src={vLogo} alt="логотип" className="header__v-logo" />
            </div>

            <nav className="header__nav">
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">GAME</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">CHAMPIONS</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">NEWS<span className="header__arrow">🢓</span></a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">PATCH NOTES</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">DISCOVER<span className="header__arrow">🢓</span></a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">ESPORTS</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">UNIVERSE</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">SHOP</a>
                <a href="https://playvalorant.com/ru-ru/" className="header__link-item">SUPPORT</a>
            </nav>

            <div className="header__profile">
                <img className="header__avatar" src={avatar} alt="аватар." />
                <p className="header__profile-name">Julik_R<span className="header__arrow">🢓</span></p>
            </div>

        </header>
    )
}