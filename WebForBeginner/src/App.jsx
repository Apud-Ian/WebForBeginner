
import {Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

import Nav from './components/Nav.jsx';
import Introduct from './pages/Introduct.jsx';
import ScrollToHash from './components/ScrollToHass.jsx';
const App = ()=>{
    return (
        <div className='min-h-screen font-body w-full dark:bg-teal-deep bg-stone-100 overflow-x-hidden'>
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