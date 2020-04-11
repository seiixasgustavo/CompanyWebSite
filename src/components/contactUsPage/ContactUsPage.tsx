import React from "react";
import {
  makeStyles,
  Typography,
  Divider,
  TextField,
  Grid,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

export default () => {
  const styles = useStyles();

  const [state, setState] = React.useState({
    selectedItem: "",
  });

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setState({...state, selectedItem: event.target.value as string});
  };

  const selectItems = [
    "App Design",
    "Web Design",
    "Desktop Design",
    "Bot Design",
    "AI Design",
    "Embedded Design",
  ].map((element) => {
    return <option value={element}>{element}</option>;
  });

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <Typography variant="h3">Contact Us</Typography>
        <Divider
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "black",
            margin: "30px 0",
          }}
        />
        <form id="form">
          <Grid container className={styles.formContainer} spacing={5}>
            <Grid item xs={12}>
              <TextField
                style={{width: "100%"}}
                required
                variant="outlined"
                id="name"
                label="Full Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                style={{width: "100%"}}
                required
                variant="outlined"
                id="phone"
                label="Number"
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{width: "100%"}}
                required
                variant="outlined"
                id="email"
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel required htmlFor="serviceSelect">
                  Service
                </InputLabel>
                <Select
                  style={{width: "100%"}}
                  native
                  value={state.selectedItem}
                  onChange={handleChange}
                  label="Service"
                  inputProps={{name: "selectItem", id: "serviceSelect"}}
                >
                  <option aria-label="None" value="" />
                  {selectItems}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Description"
                variant="outlined"
                placeholder="Give us the details of the service..."
                style={{width: "100%"}}
                multiline
                rows={15}
                rowsMax={15}
              ></TextField>
            </Grid>
          </Grid>
          <div style={{width: "100%", textAlign: "center"}}>
            <Divider style={{width: "50%", margin: "40px auto"}} />
            <Button
              variant="outlined"
              style={{width: "15%", minWidth: "100px"}}
              onClick={refreshPage}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "900px",
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
  formContainer: {
    width: "100%",
    justifyContent: "space-between",
    textAlign: "center",
    paddingTop: "30px",
  },
  formControl: {
    width: "100%",
  },
}));
