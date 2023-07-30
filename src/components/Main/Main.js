import './Main.css';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from '../Portfolio/Portfolio';


function Main() {
  return (
    <main className='landing'>
      <Promo />
      <AboutProject caption={'О проекте'} />
      <Techs caption={'Технологии'}/>
      <AboutMe caption={'Студент'}/>
      <Portfolio caption={'Портфолио'}/>
    </main>
  )
}

export default Main;
