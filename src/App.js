import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/projects' element={<NavBar />}>
                <Route index={true} element={<Projects />}></Route>
                <Route path=':id' element={<h1>Hello</h1>}></Route>
                <Route
                    path='new'
                    element={<h1 className='text-8xl text-red-800'>new</h1>}
                ></Route>
            </Route>
        </Routes>
    )
}

export default App
