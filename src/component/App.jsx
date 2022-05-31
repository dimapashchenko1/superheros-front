import './App.module.css';
import { Loader } from '../component/indeх';
import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../views/HomePage'));
const SuperheroPage = lazy(() => import('../views/SuperheroPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/superhero" element={<SuperheroPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
