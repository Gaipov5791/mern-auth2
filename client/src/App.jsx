import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import Profile from '../src/pages/Profile';

const App = () => {
	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path='/sign-in' element={<Signin/>}/>
			<Route path='/sign-up' element={<Signup/>}/>
			<Route path='/profile' element={<Profile/>}/>
		</Routes>
		</BrowserRouter>
	)
}

export default App;