import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Business from './components/Business/Business';
import Community from './components/Community/Community';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Redirect push to="/business" />
          
          <Route path="/business" render={() => <Business /> } />
          <Route path="/community" render={() => <Community /> } />
          
          
      </div>
    </BrowserRouter>
  )
}

export default App;
