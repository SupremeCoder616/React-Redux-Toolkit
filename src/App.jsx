import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './component/NavBar';
// import { Provider } from 'react-redux';
// import store from './stor/store';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        
          <Router>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
