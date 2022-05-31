import css from './Home.module.css';
import { Header } from '../indeх';
import HeroInput from '../HeroInput';

function Home() {
  return (
    <>
      <div className={css.home__container}>
        <div className={css.home__header}>
          <Header />
        </div>
        <div className={css.home__heroInput}>
          <HeroInput />
        </div>
      </div>
    </>
  );
}

export default Home;
