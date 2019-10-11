import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Logo extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <p className="logoP">INUM</p>
                </Link> 
            </div>
        )
    }
}

export default Logo