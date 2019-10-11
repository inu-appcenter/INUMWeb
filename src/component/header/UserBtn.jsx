import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class UserBtn extends Component {
    render() {
        return (
            <>
                <Link to="/account">
                    <button className="material-icons-outlined">account_box</button>
                </Link>
            </>
        )
    }
}

export default UserBtn