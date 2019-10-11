import React, { Component } from 'react';
import ItemCard from '../component/item/ItemCard'
import Slider from 'react-slick'

class MainItemList extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 100,
            slidesToShow: 3.8,
            slidesToScroll: 3
          };
        return (
            <Slider {...settings} className = "mainItemList">
                {this.props.resData.map((Data)=>{
                    return(<ItemCard key={Data.productId} productName={Data.productName} price={Data.productPrice}/>)
                })}
            </Slider>
        );
    }
}

export default MainItemList;