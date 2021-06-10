import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import FormSignIn from './components/FormSignIn/FormSignIn';
import Header from './components/Header/Header';
import FormSignUp from './components/FormSignUp/FormSignUp';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null)

  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          
          <Route exact path="/" render={() => <FormSignIn /> } />
          <Route path="/sign_up_step_1" render={() => <FormSignUp setData={setData} /> } />
          <Route path="/sign_up_step_2" render={() => <Form data={data} /> } />
          
      </div>
    </BrowserRouter>
  )
}

export default App;
