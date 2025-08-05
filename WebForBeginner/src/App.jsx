
import {Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Nav from './components/Nav.jsx';
const App = ()=>{
    return (
        <div className='min-h-screen w-full dark:bg-sky-950 bg-stone-300 overflow-x-hidden'>
            <Nav/>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App;