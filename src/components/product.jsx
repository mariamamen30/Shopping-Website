import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="item-medium-1">
          {this.props.product.discount && (
            <div className="item-medium-1__alert">Sale</div>
          )}
          <div
            className="item-medium-1__image image"
            style={this.props.product.imgUrl}
          >
            <a
              className="item-medium-1__action"
              href=""
              onClick={() => addProduct(this.props.p)}
            >
              Add to Cart
            </a>
          </div>
          <a href="/">
            <h4>{this.props.product.name}</h4>
            <div className="flex-row">
              <div>
                {this.props.product.discount && (
                  <del>
                    ${this.props.product.price - this.props.product.discount}
                  </del>
                )}
                <span className="lable">${this.props.product.price}</span>
              </div>
            </div>
          </a>
          <div className="crud-actions">
            <a href="/">
              <i className="far fa-eye"></i>
            </a>
            <a href="/">
              <i className="fas fa-edit"></i>
            </a>
            <a href="/">
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
