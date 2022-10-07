import './Main.css';
import '../SkillCard/SkillCard.css';
import './Skills.css';

import basicSkill from '../../images/basic.svg';
import signatureSkill from '../../images/signature.svg';
import ultimateSkill from '../../images/ultimate.svg';

import SkillCard from '../SkillCard/SkillCard';
import BackgroundFigures from '../BackgroundFigures/BackgroundFigures';

export default function Main() {
    return (
        <div className="main">
            <h1 className="main__title">AGENTS</h1>

            <div className="skills">
                <SkillCard
                    title="BASIC"
                    subtitle="Slow Orb"
                    paragraph="Cast out a radianite orb that breaks into a slowing field upon impact with the ground."
                >
                    <img className="card__basic-icon" src={basicSkill} alt="skill/" />
                </SkillCard>

                <SkillCard
                    title="SIGNATURE"
                    subtitle="Healing Orb"
                    paragraph="Heal an ally or yourself to full health over a few seconds."
                >
                    <img className="card__signature-icon" src={signatureSkill} alt="skill/" />
                </SkillCard>

                <SkillCard
                    title="ULTIMATE"
                    subtitle="Resurrection"
                    paragraph="Target a friendly corpse. After a short delay, revive them with full health."
                >
                    <img className="card__ultimate-icon" src={ultimateSkill} alt="skill." />
                </SkillCard>

                <article className="card__last">
                    <div className="card__last-container">
                        <span className="card__arrow">►</span>
                    </div>
                </article>
            </div>

            <BackgroundFigures />

        </div>
    )
}