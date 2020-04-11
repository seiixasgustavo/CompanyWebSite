import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";

import {Link} from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import BookIcon from "@material-ui/icons/Book";
import EmailIcon from "@material-ui/icons/Email";
import ExploreIcon from "@material-ui/icons/Explore";
import PermMediaIcon from "@material-ui/icons/PermMedia";

interface Props {
  closeDrawer: Function;
}

export default (props: Props) => {
  const styles = useStyles();
  const sideBarIcons = [
    {
      icon: ExploreIcon,
      title: "Explore",
      link: "/",
    },
    {
      icon: AppsIcon,
      title: "Products",
      link: "/products",
    },
    {
      icon: PermMediaIcon,
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      icon: EmailIcon,
      title: "Contact Us",
      link: "/contactus",
    },
    {
      icon: BookIcon,
      title: "Blog",
      link: "/blog",
    },
  ].map((e) => {
    return (
      <Link to={e.link} style={{color: "inherit", textDecoration: "inherit"}}>
        <ListItem button onClick={() => props.closeDrawer()}>
          <ListItemIcon>
            <e.icon />
          </ListItemIcon>
          <ListItemText>{e.title}</ListItemText>
        </ListItem>
      </Link>
    );
  });

  return (
    <div className={styles.drawer}>
      <div style={{width: "100%", padding: "20px 0"}}>
        <Typography
          variant="h4"
          style={{flexGrow: 1, color: "black", margin: "auto 20px"}}
        >
          Company
        </Typography>
      </div>
      <Divider />
      <div style={{width: "100%", padding: "20px 15px", display: "flex"}}>
        <Avatar className={styles.avatarLarge}>G</Avatar>
        <div style={{padding: "0 10px"}}>
          <Typography variant="h6">Gustavo Seixas</Typography>
          <Typography
            variant="body2"
            style={{color: "#d0d0d0", fontSize: "12px"}}
          >
            USER
          </Typography>
        </div>
      </div>
      <Divider />
      <List>{sideBarIcons}</List>
      <div
        style={{
          width: "100%",
          bottom: 0,
          position: "absolute",
        }}
      >
        <Button
          style={{
            width: "100%",
            height: "50px",
          }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
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
