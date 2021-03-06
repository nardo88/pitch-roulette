import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './styles/scss/main.scss'
import Header from './components/Header/Header';
import Business from './components/Business/Business';
import Community from './components/Community/Community';
import BusinessDushboard from './components/BusinessDushboard/BusinessDushboard';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {
          window.location.pathname === '/' &&  <Redirect to="/business" />
        }

          <Header />
          <Route path="/business" render={() => <Business /> } />
          <Route path="/community" render={() => <Community /> } />
          <Route path="/business/dushboard" render={() => <BusinessDushboard /> } />
      </div>  
    </BrowserRouter>
  )
}

export default App;
