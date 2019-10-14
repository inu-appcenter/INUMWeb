import React, { Component } from 'react';

import IntroBlock from '../component/account/IntroBlock'
import InputForm from './InputForm';

class Account extends Component {
    render() {
        return (
            <div className="accountForm">
                <IntroBlock/>
                <InputForm/>
            </div>
        );
    }
}

export default Account;