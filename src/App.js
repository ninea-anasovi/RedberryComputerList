import { Routes, Route } from 'react-router-dom';
import './App.css';
import AxiosBootstrap from './bootstrap/AxiosBootstrap';
import WizardForm from './components/pages/wizardFrom';
import Home from './components/pages/home';
import List from './components/pages/list';
import InfoPage from './components/pages/InfoPage';
import Finished from './components/pages/finished';

function App() {
  return (
    <div>
      <AxiosBootstrap/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<WizardForm />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/laptop/:id' element={<InfoPage />}/>
        <Route path='/finished' element={<Finished />}/>
      </Routes>
    </div>
  );
}

export default App;
