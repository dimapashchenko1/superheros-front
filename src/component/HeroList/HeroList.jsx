import React, { useEffect, useState } from 'react';
import css from './HeroList.module.css';
import apiClient from '../../api/settings.js';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import Loader from '../Loader/Loader';

const API = apiClient.defaults.baseURL;

function HerosList() {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heros, setHeros] = useState([]);

  const fortmatResponse = res => {
    return JSON.parse(JSON.stringify(res.data));
  };
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setHeros(fortmatResponse(result));
        },
        error => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  function editHero() {
    toggle();
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={css.heroList__container}>
        <h1 className={css.heroList__title}>All superheros</h1>
        <div className={css.heroList__div}>
          <ul className={css.heroList__list}>
            {heros.map(
              ({
                _id,
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
              }) => (
                <li key={_id} className={css.heroList__item}>
                  <img
                    className={css.heroList__img}
                    src="./logo192.png"
                    alt=""
                    width={170}
                    height={170}
                  />
                  <div className={css.heroList__wrapper}>
                    <span className={css.heroList__nick}>
                      Nickname: {nickname}
                    </span>
                    <span className={css.heroList__name}>
                      Real name: {real_name}
                    </span>
                    <span className={css.heroList__description}>
                      Description: {origin_description}
                    </span>
                    <span className={css.heroList__superpowers}>
                      Superpowers: {superpowers}
                    </span>
                    <span className={css.heroList__phrase}>
                      Catch_phrase: {catch_phrase}
                    </span>
                    <button className={css.heroList__btn} onClick={editHero}>
                      Редактировать
                    </button>
                    {isShowingModal && (
                      <Modal
                        id={_id}
                        toLogout={editHero}
                        closeModal={toggle}
                        handleBackdropClick={handleBackdropClick}
                      />
                    )}
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default HerosList;
