import { Routes, Route } from 'react-router-dom';
import './App.css';
import WizardForm from './components/pages/wizardFrom';
import Home from './components/pages/home';
import List from './components/pages/list';
import InfoPage from './components/pages/InfoPage';
import AxiosBootstrap from './bootstrap/AxiosBootstrap';

function App() {
  return (
    <div>
      <AxiosBootstrap/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<WizardForm />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/details' element={<InfoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
