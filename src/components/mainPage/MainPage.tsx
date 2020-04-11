import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

import BlogContact from "./components/BlogContact";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";

import LaptopLogo from "./images/laptop.svg";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWitdh() {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

export default () => {
  const styles = useStyles();

  let width = useCurrentWitdh();

  const header = (
    <div className={styles.descriptionContainer}>
      <div className={styles.titleContainer}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          leo sed velit mollis accumsan. Fusce consequat ligula et turpis
          pulvinar, at mollis felis placerat. Curabitur odio lorem, molestie ac.{" "}
        </Typography>
      </div>

      <div className={styles.descriptionDivider} />
      <div className={styles.imageContainer}>
        <img src={LaptopLogo} alt="laptop logo" height="auto" width="80%" />
      </div>
    </div>
  );

  const headerMobile = (
    <div style={{width: "100%", textAlign: "center"}}>
      <div className={styles.imageContainerMobile}>
        <img src={LaptopLogo} alt="laptop logo" height="auto" width="100%" />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {width < 600 ? headerMobile : header}
      <Portfolio />
      <Products />
      <BlogContact />
      <ContactUs />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    minHeight: "2000px",
    width: "100%",
    backgroundColor: "white",
    margin: 0,
  },
  descriptionContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    minHeight: "100px",
    margin: 0,
    textAlign: "center",
    padding: "0 0 30px",
  },
  descriptionContainerMobile: {
    width: "100%",
    backgroundColor: "white",
    minHeight: "100px",
    margin: 0,
    textAlign: "center",
    padding: "30px 0",
  },
  titleContainer: {
    width: "40%",
    height: "70%",
    margin: "auto 40px",
    overflow: "hidden",
  },
  titleContainerMobile: {
    width: "90%",
    height: "30%",
    margin: "auto 40px",
    overflow: "hidden",
  },
  descriptionDivider: {
    width: "10%",
  },
  imageContainer: {
    height: "auto",
    width: "50%",
    margin: "auto",
  },
  imageContainerMobile: {
    height: "auto",
    width: "40%",
    margin: "auto",
    padding: "40px 0",
  },
}));
