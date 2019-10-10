import React, { Component } from 'react';


class ItemCard extends Component {
    render() {
        return (
            <div>
                <div className="mdc-card itemCard">
                    <div className="mdc-card__primary-action">
                        <div className="mdc-card__media mdc-card__media--16-9"></div>
                    </div>
                    <div className="itemDetail">
                        <div className="itemHeader">
                            <div className="mdc-typography itemName">{this.props.productName}</div>
                            <div className="mdc-typography itemPrice">{this.props.price}</div>
                        </div>
                        {/* <div className="itemBtnGroup">
                            <div className="mdc-card__action-buttons ">
                                <button className="mdc-card__action mdc-card__action--button itemBtn">Read</button>
                                <button className="mdc-card__action mdc-card__action--button itemBtn">Bookmark</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;