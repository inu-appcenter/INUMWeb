import React, { Component } from 'react';
import HeaderContainer from './Header'
import NavigationContainer from './Navigation'
import MainView from './MainView';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <HeaderContainer/>
                <NavigationContainer/>
                <div className="navUnderLine"/>
                <MainView/>
            </div>
        );
    }
}

export default Home;