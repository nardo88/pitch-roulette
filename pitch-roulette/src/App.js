import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import FormSignIn from './components/FormSignIn/FormSignIn';
import Header from './components/Header/Header';
import FormSignUp from './components/FormSignUp/FormSignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          
          <Route exact path="/" render={() => <FormSignIn /> } />
          <Route path="/sign_up_step_1" render={() => <FormSignUp /> } />
          <Route path="/sign_up_step_2" render={() => <Form /> } />
          
      </div>
    </BrowserRouter>
  )
}

export default App;
