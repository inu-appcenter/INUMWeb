import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        return (
            <div className="inputForm">
                <form className="loginForm">
                    <input className="idForm" placeholder="학번"/>
                    <input className="passwdForm" placeholder="비밀번호"/>
                    <button>로그인</button>
                </form>
            </div>
        );
    }
}

export default InputForm;