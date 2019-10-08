import React, { Component } from 'react';

class NavigationItem extends Component {
    render() {
        return (
            <div>
                <button className="navItem">{this.props.btName}</button>
            </div>
        );
    }
}

export default NavigationItem;