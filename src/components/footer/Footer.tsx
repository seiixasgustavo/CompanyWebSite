import React from "react";
import {makeStyles, Grid} from "@material-ui/core";

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "black",
    minHeight: "400px",
    width: "100%"
  }
}));
