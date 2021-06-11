import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import '../Form/Form.css';
import SignInCommuniti from '../SignInCommuniti/SignInCommuniti'
import SignUpCommunity from '../SignUpCommunity/SignUpCommunity'
import Industries from '../Industries/Industries'
import SignUpComLast from '../SignUpComLast/SignUpComLast'
const Community = () => {
    
    const [formData, setFormData] = useState(null)
    const [industriesData, setIndustriesData] = useState(null)

    return (
        
        <>
            <Route exact path="/community" render={() => <SignInCommuniti /> } />
            <Route exact path="/community/sign_up_step_1" render={() => <SignUpCommunity setData={setFormData} /> } />
            <Route exact path="/community/sign_up_step_2" render={() => <Industries setIndustriesData={setIndustriesData} /> } />
            <Route exact path="/community/sign_up_step_3" render={() => <SignUpComLast data={formData} industriesData={industriesData} /> } />

        </>
    )
}

export default Community;