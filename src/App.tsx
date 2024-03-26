import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/aboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/mainPage/MainPageAsync';
export const App = () => {
  return (
    <div>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}></Route>
          <Route path="/about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
