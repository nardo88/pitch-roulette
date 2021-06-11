import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import '../Form/Form.css';
import Form from '../Form/Form';
import FormSignIn from '../FormSignIn/FormSignIn';
import FormSignUp from '../FormSignUp/FormSignUp';


const Business = () => {
  const [data, setData] = useState(null)

    return (
        <>
            <Route exact path="/business" render={() => <FormSignIn /> } />
            <Route exact path="/business/sign_up_step_1" render={() => <FormSignUp setData={setData} /> } />
            <Route exact path="/business/sign_up_step_2" render={() => <Form data={data} /> } />
        
        
        </>
    )
}

export default Business;