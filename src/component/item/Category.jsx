import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <div className="categoryName">{this.props.category}</div>
                <div className="categoryMore">> 더 보러가기</div>
            </div>
        );
    }
}

export default Category;