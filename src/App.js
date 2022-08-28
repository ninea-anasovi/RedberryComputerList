import { Routes, Route } from 'react-router-dom';
import './App.css';
import WizardForm from './components/pages/wizardFrom';
import Home from './components/pages/home';
import List from './components/pages/list';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<WizardForm />}/>
        <Route path='/list' element={<List />}/>
      </Routes>
    </div>
  );
}

export default App;
