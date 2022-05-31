import { Header, HeroList } from '../indeх';
import css from './Superhero.module.css';

function Superhero() {
  return (
    <div className={css.about__container}>
      <div className={css.about__header}>
        <Header />
      </div>
      <div className={css.about__heroList}>
        <HeroList />
      </div>
    </div>
  );
}

export default Superhero;
