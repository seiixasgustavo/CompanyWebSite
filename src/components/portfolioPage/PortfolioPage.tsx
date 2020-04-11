import React from "react";
import {
  makeStyles,
  Typography,
  Divider,
  Grid,
  CardContent,
  CardMedia,
  Card,
} from "@material-ui/core";

import BotIcon from "./images/bot-message.svg";
import MobileApp from "./images/mobile-app.svg";
import ReactJSIcon from "./images/reactJS-logo.svg";
import VanillaLogo from "./images/vanilla-logo.svg";
import LaptopLogo from "./images/computer-app.svg";

export default () => {
  const styles = useStyles();

  const cards = [
    {title: "Flutter App", icon: MobileApp},
    {title: "ReactJS Website", icon: ReactJSIcon},
    {title: "C++ Desktop Software", icon: LaptopLogo},
  ].map((element) => {
    return (
      <Grid item xs>
        <Card className={styles.cardStyle}>
          <CardMedia image={element.icon} className={styles.cardImage} />
          <Divider style={{width: "50%", margin: "10px auto"}} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {element.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
              Phasellus nunc quam, scelerisque amet.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  const cards2 = [
    {title: "Message Bot", icon: BotIcon},
    {title: "AI Database Analyser", icon: VanillaLogo},
    {title: "Embedded Software for PCB", icon: LaptopLogo},
  ].map((element) => {
    return (
      <Grid item xs>
        <Card className={styles.cardStyle}>
          <CardMedia image={element.icon} className={styles.cardImage} />
          <Divider style={{width: "50%", margin: "10px auto"}} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {element.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              pretium ante. Vivamus at pharetra sem, a ullamcorper velit.
              Phasellus nunc quam, scelerisque amet.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <Typography variant="h3">Portfolio</Typography>
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

const useStyles = makeStyles((theme) => ({
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
    padding: "20px 0",
  },
  cardImage: {
    width: "300px",
    height: "auto",
    margin: "5px auto",
    minHeight: "300px",
  },
}));
