import React, { Component } from 'react';
import ItemCard from '../component/item/ItemCard'

class MainItemList extends Component {
    render() {
        return (
            <div className = "mainItemList">
                {this.props.resData.map((Data)=>{
                    return(<ItemCard key={Data.productId} productName={Data.productName} price={Data.productPrice}/>)
                })}
            </div>
        );
    }
}

export default MainItemList;