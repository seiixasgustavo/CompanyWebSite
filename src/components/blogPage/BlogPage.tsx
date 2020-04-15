import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  CardActionArea,
  Grid,
} from "@material-ui/core";

import CPlusPlus from "./images/cplusplus.svg";
import Flutter from "./images/flutter.svg";
import Golang from "./images/golang.svg";
import Java from "./images/java.svg";
import Javascript from "./images/javascript.svg";
import ReactLogo from "./images/react.svg";

export default () => {
  const styles = useStyles();

  const cards = [
    {
      title: "C++ Section",
      icon: CPlusPlus,
    },
    {
      title: "Golang Section",
      icon: Golang,
    },
    {
      title: "Java Section",
      icon: Java,
    },
  ].map((element) => {
    return (
      <Grid item xs>
        <Card className={styles.cardStyle}>
          <CardActionArea
            style={{width: "100%", height: "100%", textAlign: "center"}}
          >
            <CardMedia image={element.icon} className={styles.cardImage} />
            <Divider style={{width: "50%", margin: "10px auto"}} />
            <CardContent style={{padding: "10%"}}>
              <Typography gutterBottom variant="h5" component="h2">
                {element.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
                Phasellus nunc quam, scelerisque amet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  const cards2 = [
    {
      title: "Javascript Section",
      icon: Javascript,
    },
    {
      title: "Mobile Frameworks",
      icon: Flutter,
    },
    {
      title: "Web frameworks",
      icon: ReactLogo,
    },
  ].map((element) => {
    return (
      <Grid item xs>
        <Card className={styles.cardStyle}>
          <CardActionArea
            style={{width: "100%", height: "100%", textAlign: "center"}}
          >
            <CardMedia image={element.icon} className={styles.cardImage} />
            <Divider style={{width: "50%", margin: "10px auto"}} />
            <CardContent style={{padding: "10%"}}>
              <Typography gutterBottom variant="h5" component="h2">
                {element.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
                Phasellus nunc quam, scelerisque amet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <Typography variant="h3">Blog</Typography>
        <Divider
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "black",
            margin: "30px 0",
          }}
        />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          laoreet in enim ac suscipit. Etiam laoreet erat purus, ac auctor nisl
          bibendum ut. Nullam finibus arcu sapien, et porttitor odio auctor
          tristique. Nunc eget ante purus. In tincidunt sed arcu non tempus. Sed
          lacinia aliquet leo, ac varius libero aliquam in. Donec purus est,
          aliquet et risus et, congue gravida est. Donec dignissim pretium erat,
          in volutpat elit viverra id. Vivamus venenatis tortor nec pellentesque
          sodales. Nulla ultricies non tellus nec elementum. Proin scelerisque
          tellus quis magna suscipit ultricies. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          tempor convallis nibh at suscipit. Pellentesque quis cursus lacus, ut
          pulvinar dui. Ut eleifend quis ex nec efficitur. Mauris faucibus dui
          in ligula interdum sollicitudin.
        </Typography>
        <div style={{width: "100%", textAlign: "center"}}>
          <Divider style={{width: "50%", margin: "40px auto"}} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <Grid container justify="center" className={styles.grid} spacing={4}>
          {cards}
        </Grid>
        <Grid
          container
          justify="center"
          className={styles.grid}
          spacing={4}
          style={{padding: "10px auto"}}
        >
          {cards2}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((themes) => ({
  root: {
    minHeight: "1000px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
    margin: 0,
    padding: "30px 0",
  },
  textContainer: {
    margin: "auto",
    width: "90%",
    textAlign: "start",
  },
  cardContainer: {
    width: "100%",
    textAlign: "center",
  },
  gridContainer: {
    width: "100%",
    paddingBottom: "30px",
  },
  grid: {
    flexGrow: 1,
    padding: "0 5%",
  },
  cardStyle: {
    minWidth: "200px",
    minHeight: "500px",
    textAlign: "center",
  },
  cardImage: {
    width: "300px",
    height: "auto",
    margin: "5px auto",
    minHeight: "300px",
  },
}));
