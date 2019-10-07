import React, {Component} from 'react'
import Logo from '../component/header/Logo'
import UserBtn from '../component/header/UserBtn'
import AddProductBtn from '../component/header/AddProductBtn'
import ChatBtn from '../component/header/ChatBtn'

class HeaderTop extends Component{
    render(){
        return(
            <div>
                <Logo/>
                <div>
                    <UserBtn/>
                    <AddProductBtn/>
                    <ChatBtn/>
                </div>
                
            </div>
        )
    }
}

export default HeaderTop