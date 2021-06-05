/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";
import AppContext from "../context/AppContext";
import withData from "../lib/apollo";
import "../styles/app.css";
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
class MyApp extends App {
  state = {
    user: null,
    cart: { items: [], total: 0 },
  };

  componentDidMount() {
    const token = Cookie.get("token");
    // restore cart from cookie, this could also be tracked in a db
    const cart = Cookie.get("cart");
    //if items in cart, set items and total from cookie

    if (typeof cart === "string" && cart !== "undefined") {
      JSON.parse(cart).forEach((item) => {
        this.setState({
          cart: { items: JSON.parse(cart), total: item.price * item.quantity },
        });
      });
    }
    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          this.setState({ user: null });
          return null;
        }
        const user = await res.json();
        this.setUser(user);
      });
    }
  }

  setUser = (user) => {
    this.setState({ user });
  };
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          isAuthenticated: !!this.state.user,
          setUser: this.setUser,
          // cart: this.state.cart,
          // addItem: this.addItem,
          // removeItem: this.removeItem,
        }}
      >
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
      </AppContext.Provider>
    );
  }
}

export default withData(MyApp);
