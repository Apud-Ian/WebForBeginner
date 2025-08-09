
import {Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

import Nav from './components/Nav.jsx';
import Introduct from './pages/Introduct.jsx';
import ScrollToHash from './components/ScrollToHass.jsx';
const App = ()=>{
    return (
        <div className='min-h-screen w-full dark:bg-teal-950 bg-teal-800 overflow-x-hidden'>
            <Nav/>
            <ScrollToHash/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Introduct/:tema/' element={<Introduct />} />
            </Routes>
        </div>
    )
}

export default App;