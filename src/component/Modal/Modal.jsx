import React, { useRef } from 'react';
import css from './Modal.module.css';
import apiClient from '../../api/settings.js';
import { createPortal } from 'react-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const modalRootRef = document.querySelector('#root');

function Modal({ handleBackdropClick, toggle, closeModal, id }) {
  const nickname = useRef(null);
  const real_name = useRef(null);
  const origin_description = useRef(null);
  const superpowers = useRef(null);
  const catch_phrase = useRef(null);
  // console.log("heros", heros);
  async function putHero() {
    const putHero = {
      nickname: nickname.current.value,
      real_name: real_name.current.value,
      origin_description: origin_description.current.value,
      superpowers: superpowers.current.value,
      catch_phrase: catch_phrase.current.value,
    };
    await apiClient.put(`/${id}`, putHero, closeModal());

    Notify.success(`Hero ${putHero.nickname} successfully changed`);
  }

  async function deleteHero() {
    await apiClient.delete(`/${id}`, closeModal());

    Notify.success(`Hero successfully removed`);
  }

  return createPortal(
    <>
      {
        <div className={css.backdrop} onClick={handleBackdropClick}>
          <div className={css.modal_content}>
            <div className={css.form}>
              <button
                className={css.modalCloseBtn}
                onClick={closeModal}
                type="button"
              >
                X
              </button>
              <h1 className={css.form__title}>
                Enter upload superhero details
              </h1>
              <div className={css.form__wrapper}>
                <label className={css.label}>
                  {' '}
                  Name
                  <input
                    type="text"
                    className={css.form__control}
                    ref={nickname}
                  />
                </label>

                <label className={css.label}>
                  {' '}
                  Real name
                  <input className={css.form__control} ref={real_name} />
                </label>

                <label className={css.label}>
                  {' '}
                  Description
                  <textarea
                    type="text"
                    className={css.form__control}
                    ref={origin_description}
                  />
                </label>

                <label className={css.label}>
                  {' '}
                  Superpowers
                  <input
                    type="text"
                    className={css.form__control}
                    ref={superpowers}
                  />
                </label>

                <label className={css.label}>
                  {' '}
                  Catch phrase
                  <input
                    type="text"
                    className={css.form__control}
                    ref={catch_phrase}
                  />
                </label>

                <div className={css.btnWrapper}>
                  <button className={css.btn} onClick={putHero}>
                    Edit Hero
                  </button>
                  <button className={css.btn} onClick={deleteHero}>
                    Delete Hero
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>,
    modalRootRef,
  );
}

export default Modal;
