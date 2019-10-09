import React, { Component } from 'react';


class ItemCard extends Component {
    render() {
        return (
            <div>
                <div class="mdc-card demo-card">
                    <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
                        <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" ></div>
                        <div class="demo-card__primary">
                        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
                        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>
                        </div>
                        <div class="demo-card__secondary mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today.</div>
                    </div>
                    <div class="mdc-card__actions">
                        <div class="mdc-card__action-buttons">
                        <button class="mdc-button mdc-card__action mdc-card__action--button">Read</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button">Bookmark</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;