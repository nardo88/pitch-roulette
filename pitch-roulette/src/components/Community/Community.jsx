import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import '../Form/Form.css';
import SignInCommuniti from '../SignInCommuniti/SignInCommuniti'
import SignUpCommunity from '../SignUpCommunity/SignUpCommunity'
import Industries from '../Industries/Industries'
const Community = () => {
    
    const [fordData, setFormData] = useState(null)
    // const [fordData, setFormData] = useState(null)

    return (
        
        <>
            <Route exact path="/community" render={() => <SignInCommuniti /> } />
            <Route exact path="/community/sign_up_step_1" render={() => <SignUpCommunity setData={setFormData} /> } />
            <Route exact path="/community/sign_up_step_2" render={() => <Industries  /> } />

        </>
    )
}

export default Community;