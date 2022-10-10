import './Main.css';
import '../SkillCard/SkillCard.css';
import './Skills.css';

import phoenix from '../../images/phoenix/phoenix.png';
import phoenixFirst from '../../images/phoenix/firstSkill.svg';
import phoenixSecond from '../../images/phoenix/secondSkill.svg';
import phoenixThird from '../../images/phoenix/thirdSkill.svg';
import phoenixThourth from '../../images/phoenix/thourthSkill.svg';

import jett from '../../images/jett/jett.png';
import jettFirst from '../../images/jett/firstSkill.svg';
import jettSecond from '../../images/jett/secondSkill.svg';
import jettThird from '../../images/jett/thirdSkill.svg';
import jettThourth from '../../images/jett/thourthSkill.svg';

import sova from '../../images/sova/sova.png';
import sovaFirst from '../../images/sova/firstSkill.svg';
import sovaSecond from '../../images/sova/secondSkill.svg';
import sovaThird from '../../images/sova/thirdSkill.svg';
import sovaThourth from '../../images/sova/thourthSkill.svg';

import sage from '../../images/sage/sage.png';
import basicSkill from '../../images/sage/basic.svg';
import sageSecondSkill from '../../images/sage/secondSkill.svg';
import signatureSkill from '../../images/sage/signature.svg';
import ultimateSkill from '../../images/sage/ultimate.svg';

import SkillCard from '../SkillCard/SkillCard';
import BackgroundFigures from '../BackgroundFigures/BackgroundFigures';
import Player from '../Player/Player';

export default function Main() {
    return (
        <div className="main">
            <h1 className="main__title">AGENTS</h1>

            <div className="players">
                <Player
                    name="PHOENIX"
                    country="United Kingdom"
                    src={phoenix}
                    on={false}
                >
                    <img className="skills__phoenix-first" src={phoenixFirst} alt="skill." />
                    <img className="skills__phoenix-second" src={phoenixSecond} alt="skill." />
                    <img className="skills__phoenix-third" src={phoenixThird} alt="skill." />
                    <img className="skills__phoenix-thourth" src={phoenixThourth} alt="skill." />
                </Player>

                <Player
                    name="JETT"
                    country="South Korea"
                    src={jett}
                    on={false}
                >
                    <img className="skills__jett-first" src={jettFirst} alt="skill." />
                    <img className="skills__jett-second" src={jettSecond} alt="skill." />
                    <img className="skills__jett-third" src={jettThird} alt="skill." />
                    <img className="skills__jett-thourth" src={jettThourth} alt="skill." />
                </Player>

                <Player
                    name="SOVA"
                    country="Russia"
                    src={sova}
                    on={false}
                >
                    <img className="skills__sova-first" src={sovaFirst} alt="skill." />
                    <img className="skills__sova-second" src={sovaSecond} alt="skill." />
                    <img className="skills__sova-third" src={sovaThird} alt="skill." />
                    <img className="skills__sova-thourth" src={sovaThourth} alt="skill." />
                </Player>

                <Player
                    name="SAGE"
                    country="China"
                    src={sage}
                    on={true}
                >
                    <img className="skills__sage-first" src={basicSkill} alt="skill." />
                    <img className="skills__sage-second" src={sageSecondSkill} alt="skill." />
                    <img className="skills__sage-third" src={signatureSkill} alt="skill." />
                    <img className="skills__sage-thourth" src={ultimateSkill} alt="skill." />
                </Player>
            </div>

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