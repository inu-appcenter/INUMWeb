import React, { Component } from 'react';
import NavigationItem from '../component/navigation/NavigationItem'

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            categoryArray : ["책","의류","가전/가구","잡화","자취방","식권"]
        }
    }
    render() {
        return (
            <div>
                {this.state.categoryArray.map((Data)=>{
                    return (<NavigationItem key={Data} btName={Data}/>)
                })}
            </div>
        );
    }
}

export default Navigation;