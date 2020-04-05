import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./mainPage/MainPage";
import {makeStyles} from "@material-ui/core";

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    margin: 0
  }
}));
