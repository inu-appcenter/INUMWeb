import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class IntroBlock extends Component {
    render() {
        return (
            <>
                <div className= "introBlock">
                    <Link to="/">
                        <div className= "introLogo introText">INUM</div>
                    </Link>
                    <div className= "introHeader introText">환영합니다.</div>
                    <div className= "introSub introText">Appcenter 계정으로 시작해보세요</div>
                    <button className= "introBtn">회원가입</button>
                </div>
            </>
        );
    }
}

export default IntroBlock;