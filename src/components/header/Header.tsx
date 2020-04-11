import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  useScrollTrigger,
  Typography,
} from "@material-ui/core";

import DrawerContainer from "../drawer/Drawer";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

export default () => {
  const trigger = useScrollTrigger();
  const styles = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({...state, open: open});
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        className={styles.appBar}
        elevation={trigger ? 1 : 0}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow: 1, color: "black"}}>
            Company
          </Typography>
          <IconButton>
            <AccountCircleIcon style={{color: "black"}} />
          </IconButton>
          <IconButton>
            <MailIcon style={{color: "black"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        <DrawerContainer closeDrawer={toggleDrawer(false)} />
      </Drawer>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  drawer: {
    width: "25%",
    minWidth: "300px",
    height: "100%",
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  list: {
    width: "100%",
  },
  avatarLarge: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
