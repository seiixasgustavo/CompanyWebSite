import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  Typography,
  CardContent,
  Divider,
  Button,
  CardMedia,
} from "@material-ui/core";

import {Link} from "react-router-dom";

import ContactUsImage from "../images/contact-us.jpg";
import BlogImage from "../images/blog-message.jpg";

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid
        container
        spacing={6}
        justify="space-evenly"
        className={styles.gridContainer}
      >
        <Grid item xs>
          <Card className={styles.container}>
            <CardMedia className={styles.imageContainer} image={BlogImage} />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h1">
                Blog
              </Typography>
              <Typography variant="body1" component="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
                Phasellus nunc quam, scelerisque amet.
              </Typography>

              <Divider
                style={{
                  width: "40%",
                  height: "1px",
                  margin: "20px auto",
                }}
              />
              <div style={{width: "100%", textAlign: "center"}}>
                <Link
                  to="/blog"
                  style={{color: "inherit", textDecoration: "inherit"}}
                >
                  <Button variant="outlined" style={{margin: "auto"}}>
                    Access
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={styles.container}>
            <CardMedia
              className={styles.imageContainer}
              image={ContactUsImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h1">
                Contact Us
              </Typography>
              <Typography variant="body1" component="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
                Phasellus nunc quam, scelerisque amet.
              </Typography>
              <Divider
                style={{
                  width: "40%",
                  height: "1px",
                  margin: "20px auto",
                }}
              />
              <div style={{width: "100%", textAlign: "center"}}>
                <Link
                  to="/contactus"
                  style={{color: "inherit", textDecoration: "inherit"}}
                >
                  <Button variant="outlined" style={{margin: "auto"}}>
                    Access
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "700px",
    backgroundColor: "#d3d3d3",
    margin: 0,
    paddingBottom: "25px",
  },
  gridContainer: {
    flexGrow: 1,
    padding: "0 2%",
  },
  gridItemContainer: {
    height: "80%",
    width: "40%",
  },
  container: {
    minHeight: "700px",
    minWidth: "350px",
  },
  imageContainer: {
    minWidth: "300px",
    minHeight: "450px",
  },
});
