import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {makeStyles} from "@material-ui/core";

import {Route, Switch} from "react-router-dom";

import MainPage from "./mainPage/MainPage";
import BlogPage from "./blogPage/BlogPage";
import ContactUsPage from "./contactUsPage/ContactUsPage";
import ProductsPage from "./productsPage/ProductsPage";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import ScrollToTop from "./router/ScrollToTop";

export default () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path="/blog">
          <ScrollToTop />
          <BlogPage />
        </Route>
        <Route path="/contactus">
          <ScrollToTop />
          <ContactUsPage />
        </Route>
        <Route path="/products">
          <ScrollToTop />
          <ProductsPage />
        </Route>
        <Route path="/portfolio">
          <ScrollToTop />
          <PortfolioPage />
        </Route>
        <Route path="/">
          <ScrollToTop />
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: 0,
  },
}));
