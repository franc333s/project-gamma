import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import './scss/global.scss'
// Scss metido aquí en vez de en la raíz
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <>
      <header>
        <Topbar />
        <h1>Project Gamma</h1>
		<Link to="/" className='topbar__a'>Home</Link>
		<Link to="/contact" className='topbar__a'>Contact</Link>
    <Link to="/styleguide" className='topbar__a'>StyleGuide</Link>
      </header>
      <main>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
      <Route path='/styleguide' element={<Styleguide />} />
		</Routes>
	  </main>
    </>
  );
}

export default App;
