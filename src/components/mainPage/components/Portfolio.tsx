import React from "react";
import {
  makeStyles,
  Typography,
  CardContent,
  Divider,
  CardMedia,
  Card,
  Grid,
  Button,
} from "@material-ui/core";

import ReactJSLogo from "../images/reactJS-logo.svg";
import BotMessageLogo from "../images/bot-message.svg";
import VanillaWebsiteLogo from "../images/vanilla-logo.svg";

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioTextContainer}>
        <Typography variant="h3">Portfolio</Typography>
        <Button style={{padding: 0}}>See more</Button>
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
      <div className={styles.cardsContainer}>
        <Grid
          container
          justify="center"
          className={styles.cardsGrid}
          spacing={10}
        >
          <Grid item xs>
            <Card className={styles.cardStyle}>
              <CardMedia
                image={ReactJSLogo}
                style={{
                  width: "300px",
                  height: "auto",
                  margin: "5px auto",
                  minHeight: "300px",
                }}
              />
              <Divider style={{width: "50%", margin: "10px auto"}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ReactJS Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ac pretium ante. Vivamus at pharetra sem, a ullamcorper
                  velit. Phasellus nunc quam, scelerisque amet.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={styles.cardStyle}>
              <CardMedia
                image={BotMessageLogo}
                style={{
                  width: "300px",
                  height: "auto",
                  margin: "5px auto",
                  minHeight: "300px",
                }}
              />
              <Divider style={{width: "50%", margin: "10px auto"}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Message Bot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ac pretium ante. Vivamus at pharetra sem, a ullamcorper
                  velit. Phasellus nunc quam, scelerisque amet.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={styles.cardStyle}>
              <CardMedia
                image={VanillaWebsiteLogo}
                style={{
                  width: "300px",
                  height: "auto",
                  margin: "5px auto",
                  minHeight: "300px",
                }}
              />
              <Divider style={{width: "50%", margin: "10px auto"}} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vanilla Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ac pretium ante. Vivamus at pharetra sem, a ullamcorper
                  velit. Phasellus nunc quam, scelerisque amet.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  portfolioContainer: {
    width: "100%",
    textAlign: "center",
    minHeight: "300px",
    backgroundColor: "#d3d3d3",
    margin: 0,
    paddingBottom: "50px",
  },
  portfolioTextContainer: {
    padding: "80px 0 0",
    margin: "auto",
    width: "85%",
    textAlign: "start",
  },
  cardsContainer: {
    width: "100%",
  },
  cardsGrid: {
    flexGrow: 1,
    padding: "0 10%",
  },
  cardStyle: {
    minWidth: "200px",
    minHeight: "500px",
    textAlign: "center",
  },
  cardImage: {
    height: "300px",
    margin: "5px auto",
  },
}));
