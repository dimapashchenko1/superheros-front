
import css from './HeroInput.module.css';
import React, { useRef } from "react";
import apiClient from "../../api/settings";

function HeroInput() {

  const nickname = useRef(null);
  const real_name = useRef(null);
  const origin_description = useRef(null);
  const superpowers = useRef(null);
  const catch_phrase = useRef(null);
  
  async function postHero() {
    const postHero = {
      nickname: nickname.current.value,
      real_name: real_name.current.value,
      origin_description: origin_description.current.value,
      superpowers: superpowers.current.value,
      catch_phrase: catch_phrase.current.value,
      
    };
    await apiClient.post("", postHero);
    
  }
  
  return (
      <div className={css.form}>
        <h1 className={css.form__title}>Enter superhero details</h1>
        <div className={css.form__wrapper}>

          <label className={css.label}> Name
            <input type="text" className={css.form__control} ref={nickname} placeholder="Superman" />
            </label>
          
          <label className={css.label}> Real name
            <input type="text" className={css.form__control} ref={real_name} placeholder="Clark Kent" />
            </label>
          
          <label className={css.label}> Description
            <textarea  type="text" className={css.form__control} ref={origin_description} placeholder="He was born Kal-El on the planet..." />
            </label>
          
          <label className={css.label}> Superpowers
            <input type="text" className={css.form__control} ref={superpowers} placeholder="Solar energy ..." />
            </label>
          
          <label className={css.label}> Catch phrase
            <input type="text" className={css.form__control} ref={catch_phrase} placeholder="Look, up in the sky" />
            </label>
          
          <button className={css.btn} onClick={postHero}>Create Hero</button>
        </div>
      </div>
  );
}
export default HeroInput;


