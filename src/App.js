import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import MainPage from './components/MainPage';
import Register from './components/Register';
import GameInfoPage from './components/GameInfoPage';
import CompatibilityGamesPage from './components/CompatitibilityGamesPage';
import GameInfoPageSkeleton from './components/GameInfoPageSkeleton';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<GameInfoPageSkeleton />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Home />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/gameinfopage/:gameTitle' element={<GameInfoPage />} />
        <Route path='/compatibilitypage' element={<CompatibilityGamesPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
