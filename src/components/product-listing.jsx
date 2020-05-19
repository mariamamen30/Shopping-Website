import React, { Component } from "react";
import Product from "./product";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

class ProductList extends Component {
  render() {
    let products;
    let showedProducts;
    //Filtration Logic

    // console.log(
    //   this.props.products.filter(
    //     product => product.filterId === this.props.currentCategory
    //   )
    // );
    if (this.props.currentCategory === 0) {
      products = this.props.products;
    } else {
      products = this.props.products.filter(
        product => product.filterId === this.props.currentCategory
      );
    }
    //Pagination Logic
    showedProducts = products.slice(
      (this.props.currentPage - 1) * this.props.pageSize,
      (this.props.currentPage - 1) * this.props.pageSize + this.props.pageSize
    );

    return (
      <React.Fragment>
        <div className="container">
          {/* <!-- filters --> */}
          <section className="filters">
            {/* <!-- search box --> */}
            <div className="search-box">
              <input
                className="search-box__input"
                placeholder="Search..."
                type="text"
                name="txt_search"
                id=""
              />
              <button type="submit" className="search-box__btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            {/* <!-- filter list --> */}
            <div>
              {/* <!-- filter header --> */}
              <h5>Categories</h5>
              {/* <!-- filter list --> */}
              <ul className="list list--vr-separator">
                {this.props.categories.map(category => (
                  <li
                    key={category}
                    className="link list__item"
                    onClick={() =>
                      this.props.onChangeCategory(
                        this.props.categories.indexOf(category)
                      )
                    }
                  >
                    <i className="link__icon fas fa-angle-right"></i>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- filter tags --> */}
            <div>
              {/* <!-- filter header --> */}
              <h5>Tags</h5>
              {/* <!-- filter tags --> */}
              <div className="tags">
                <span className="tag">Nike</span>
                <span className="tag">Travel</span>
                <span className="tag">Sport</span>
                <span className="tag">Tv</span>
                <span className="tag">Books</span>
                <span className="tag">Tech</span>
                <span className="tag">Addidas</span>
                <span className="tag">Promo</span>
                <span className="tag">Reading</span>
                <span className="tag">Social</span>
                <span className="tag">New</span>
                <span className="tag">Special</span>
                <span className="tag">Food</span>
                <span className="tag">Used</span>
              </div>
            </div>
            {/* <!-- related items --> */}
            <div>
              {/* <!-- title --> */}
              {/* <!-- small item --> */}
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
          {/* <!-- Items --> */}
          <section className="item-listing">
            {/* <!-- tools (sorting , change view , exporting) --> */}
            <div className="item-listing__tools">
              <select className="form-control" name="" id="">
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
              </select>
              <Link
                to="/product/add"
                className="action-btn"
                onClick={this.handleClick}
              >
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            {/* <!-- items --> */}
            <div
              className="item-listing__items item-listing--3items"
              style={{ width: "100%" }}
            >
              {/* <!-- medium item --> */}
              {showedProducts.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
            {/* <!-- paging --> */}
            {products.length > this.props.pageSize && (
              <Pagination
                pageCount={products.length / this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.props.onChangePage}
              />
            )}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
