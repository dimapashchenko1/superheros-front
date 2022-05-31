import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <>
      <div className={css.spinner}>
        <Oval />
      </div>
    </>
  );
}
export default Loader;
