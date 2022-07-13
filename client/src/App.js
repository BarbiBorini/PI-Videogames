import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add_videogame' element={<Form/>}/>
      </Routes>
    </>
    
  );
}

export default App;
