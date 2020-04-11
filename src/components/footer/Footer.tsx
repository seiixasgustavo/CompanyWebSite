import React, {useState, useEffect} from "react";
import {makeStyles, Grid, Typography, Divider} from "@material-ui/core";

import {Link} from "react-router-dom";

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
  let width = useCurrentWitdh();

  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid container className={styles.gridContainer}>
        {width < 600 ? null : <Grid item xs={2}></Grid>}
        <Grid
          item
          xs={width < 600 ? 12 : 8}
          className={
            width < 600 ? styles.footerContainerMobile : styles.footerContainer
          }
        >
          <Typography variant="caption" style={{color: "#c0c0c0"}}>
            {" "}
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus non ornare quam. Fusce mollis malesuada dignissim. Quisque
            tristique, velit dictum aliquet imperdiet, massa lectus luctus
            turpis, et laoreet enim arcu vel nibh. Vestibulum arcu ligula,
            eleifend aliquam turpis sit amet, dignissim iaculis purus. Curabitur
            lobortis sem tortor, eget vulputate quam suscipit ultricies. Morbi
            ac accumsan dui. Duis luctus velit sagittis semper eleifend. Nulla
            leo justo, placerat eget ligula a, ultricies sodales enim. In rutrum
            suscipit velit, at cursus erat dictum ut. Praesent nec sem
            convallis, tempus nunc ut, bibendum ante.{" "}
          </Typography>
          <p>
            <Typography variant="caption" style={{color: "#c0c0c0"}}>
              {" "}
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus non ornare quam. Fusce mollis malesuada dignissim.
              Quisque tristique, velit dictum aliquet imperdiet, massa lectus
              luctus turpis, et laoreet enim arcu vel nibh. Vestibulum arcu
              ligula, eleifend aliquam turpis sit amet, dignissim iaculis purus.{" "}
            </Typography>
          </p>
          <p>
            <Typography variant="caption" style={{color: "#c0c0c0"}}>
              {" "}
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus non ornare quam. Fusce mollis malesuada dignissim.
              Quisque tristique, velit dictum aliquet imperdiet, massa lectus
              luctus turpis, et laoreet enim arcu vel nibh.{" "}
            </Typography>
          </p>
          <p>
            <Typography variant="caption" style={{color: "#c0c0c0"}}>
              {" "}
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus non ornare quam. Fusce mollis malesuada dignissim.{" "}
            </Typography>
          </p>
          <div style={{width: "100%"}}>
            <Divider style={{backgroundColor: "#c0c0c0", width: "100%"}} />
          </div>
          <Grid
            container
            spacing={4}
            className={styles.linksContainer}
            justify="space-evenly"
          >
            <Grid item xs={4}>
              <div>
                <Typography variant="subtitle1" style={{color: "#e0e0e0"}}>
                  Products
                </Typography>
                <Typography display="inline">
                  <Link to="/products" className={styles.link}>
                    Website Design
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/products" className={styles.link}>
                    App Design
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/products" className={styles.link}>
                    Desktop Design
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/products" className={styles.link}>
                    Bot Design
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/products" className={styles.link}>
                    AI Application
                  </Link>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div>
                <Typography variant="subtitle1" style={{color: "#e0e0e0"}}>
                  Blog
                </Typography>
                <Typography>
                  <Link to="/blog" className={styles.link}>
                    C++
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/blog" className={styles.link}>
                    Frameworks
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/blog" className={styles.link}>
                    Go
                  </Link>
                </Typography>
                <Typography className={styles.link}>
                  <Link to="/blog" className={styles.link}>
                    Javascript
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Typography variant="subtitle1" style={{color: "#e0e0e0"}}>
                  Contact Us
                </Typography>
                <Typography>
                  <Link to="/contactus" className={styles.link}>
                    Chat with Us
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/contactus" className={styles.link}>
                    Call Us
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/contactus" className={styles.link}>
                    Mail Us
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div style={{width: "100%", paddingTop: "10px"}}>
            <Divider style={{backgroundColor: "#c0c0c0", width: "100%"}} />
          </div>
          <Typography variant="caption" style={{color: "#c0c0c0"}}>
            Copyright © 2020 Company Inc. All rights reserved.
          </Typography>
        </Grid>
        {width < 600 ? null : <Grid item xs={2}></Grid>}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    minHeight: "400px",
    width: "100%",
    flexGrow: 1,
    paddingBottom: "50px",
  },
  gridContainer: {
    width: "100%",
    flexGrow: 1,
  },
  footerContainer: {
    paddingTop: "20px",
    width: "100%",
  },
  footerContainerMobile: {
    width: "100%",
    padding: "0 30px",
    paddingTop: "20px",
  },
  linksContainer: {
    flexGrow: 1,
    padding: "20px 0",
  },
  link: {
    fontSize: "14px",
    color: "#c0c0c0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));
