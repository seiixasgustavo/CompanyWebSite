import React from "react";
import {
  Typography,
  Divider,
  TextField,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";

export default () => {
  const styles = useStyles();
  return (
    <div
      className={styles.portfolioContainer}
      style={{backgroundColor: "white"}}
    >
      <div className={styles.portfolioTextContainer}>
        <Typography variant="h3">Join Us</Typography>
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
      <Grid
        container
        spacing={5}
        style={{width: "100%", textAlign: "center", padding: "0 10%"}}
      >
        <Grid item xs>
          <TextField
            style={{width: "50%", minWidth: "300px"}}
            id="standard-required1"
            variant="outlined"
            label="Email"
            placeholder="Hello World"
          />
        </Grid>
        <Grid item xs>
          <TextField
            style={{width: "50%", minWidth: "300px"}}
            id="standard-required2"
            variant="outlined"
            label="Linkedin"
            placeholder="Hello World"
          />
        </Grid>
        <Grid item xs>
          <TextField
            style={{width: "50%", minWidth: "300px"}}
            id="standard-required3"
            variant="outlined"
            label="Github"
            placeholder="Hello World"
          />
        </Grid>
        <Grid item xs={12}>
          <Button style={{width: "20%"}} variant="outlined" disabled>
            Send
          </Button>
        </Grid>
      </Grid>
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
}));
