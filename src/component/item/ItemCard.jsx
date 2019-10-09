import React, { Component } from 'react';


class ItemCard extends Component {
    render() {
        return (
            <div>
                <div class="mdc-card itemCard">
                    <div class="mdc-card__primary-action" tabindex="0">
                        <div class="mdc-card__media mdc-card__media--16-9"></div>
                    </div>
                    <div className="itemDetail">
                        <div class="itemHeader">
                            <div class="mdc-typography itemName">item Name</div>
                            <div class="mdc-typography itemPrice">product Cost</div>
                        </div>
                        <div class="itemBtnGroup">
                            <div class="mdc-card__action-buttons ">
                                <button class="mdc-card__action mdc-card__action--button itemBtn">Read</button>
                                <button class="mdc-card__action mdc-card__action--button itemBtn">Bookmark</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;