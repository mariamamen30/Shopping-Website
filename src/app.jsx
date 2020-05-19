import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/product-listing";
import Login from "./components/login";
import ProductAdd from "./components/product-add";
import Header from "./components/header";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Cola",
        price: 30,
        discount: 10,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 1
      },
      {
        id: 2,
        name: "Burger",
        price: 40,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 4
      },
      {
        id: 3,
        name: "Fries",
        price: 25,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 1
      },
      {
        id: 4,
        name: "Pepci",
        price: 30,
        discount: 10,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 2
      },
      {
        id: 5,
        name: "Chocolate",
        price: 40,
        discount: 10,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 3
      },
      {
        id: 6,
        name: "Merinda",
        price: 50,
        discount: 15,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 3
      },
      {
        id: 7,
        name: "Hot Bog",
        price: 60,
        discount: 5,
        imgUrl: {
          backgroundImage: "url('assets/img/products/product-grey-7.jpg')"
        },
        filterId: 4
      }
    ],
    categories: [
      "All",
      "Arts & Crafts",
      "Automotive",
      "Baby",
      "Books",
      "Eletronics",
      "Women's",
      "Men's Fashion",
      "Health & Household",
      "Home & Kitchen",
      "Military Accessories",
      "Movies & Television",
      "Sports & Outdoors",
      "Tools & Home Improvement",
      "Toys & Games"
    ],
    pageSize: 3,
    currentPage: 1,
    currentCategory: 0
  };
  handleChangePage = page => {
    this.setState({ currentPage: page });
  };
  handleChangeCategory = categoryId => {
    // console.log(categoryId);
    this.setState({ currentCategory: +categoryId });
    this.setState({ currentPage: 1 });

    // console.log(this.state.currentCategory);
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/product" component={ProductAdd}></Route>
          <Route path="/login" component={Login}></Route>
          <Route
            exact
            path="/"
            render={props => (
              <ProductList
                {...props}
                products={this.state.products}
                categories={this.state.categories}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                currentCategory={this.state.currentCategory}
                onChangePage={this.handleChangePage}
                onChangeCategory={this.handleChangeCategory}
              ></ProductList>
            )}
          ></Route>
          <Route
            exact
            path="/list"
            render={props => (
              <ProductList
                {...props}
                products={this.state.products}
                categories={this.state.categories}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                currentCategory={this.state.currentCategory}
                onChangePage={this.handleChangePage}
                onChangeCategory={this.handleChangeCategory}
              ></ProductList>
            )}
          ></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
