import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import '../Form/Form.css';
import SignInCommuniti from '../SignInCommuniti/SignInCommuniti'
import SignUpCommunity from '../SignUpCommunity/SignUpCommunity'
const Community = () => {
    
    const [data, setData] = useState(null)

    return (
        
        <>
            <Route exact path="/community" render={() => <SignInCommuniti /> } />
            <Route exact path="/community/sign_up_step_1" render={() => <SignUpCommunity setData={setData} /> } />

        </>
    )
}

export default Community;