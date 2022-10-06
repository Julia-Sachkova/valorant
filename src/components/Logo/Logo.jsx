import logo from "../../images/logo.svg";

import './Logo.css';

export default function Logo() {
    return (
        <div className="logo__container">
            <img src={logo} alt="логотип." className="logo" />
            <p className="logo__author">Julia Rulova</p>
        </div>
    )
}