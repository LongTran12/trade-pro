import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { FormPopupNetwork } from "dan-components";
import { memberPublic } from "../../provider/web3Public";
import coinAddressValidator from "coin-address-validator";
import { message } from "antd";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  menu: {
    width: 200
  }
});

const FormViewNetwork = ({ classes }) => {
  const [input, setInput] = useState("ex:0xx0");
  // const [address,setAddress]=useState('')
  const [open, setOpen] = useState(false);
  const handleChangeInput = e => {
    setInput(e.target.value);
  };
  const [address, setAddress] = useState("");
  const onSubmit = e => {
    if (coinAddressValidator.validate(e, "eth", "prod")) {
      console.log("valid", e);
      setAddress(e);
    } else {
      memberPublic.methods
        .getAddress(e)
        .call()
        .then(add => {
          if (
            add.toLowerCase() === "0x0000000000000000000000000000000000000000"
          ) {
            message.error("Username not found");
          } else {
            setAddress(add);
          }
        });
    }
  };

  console.log("address", address);
  return (
    <Wrap>
      <TextField
        id="filled-uncontrolled"
        label="Enter Address"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={input}
        onChange={handleChangeInput}
        type="text"
        placeholder="ex:0x0dasa"
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
          onSubmit(input);
        }}
      >
        View Member
      </Button>
      {open && (
        <FormPopupNetwork
          address={address}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
      )}
    </Wrap>
  );
};
FormViewNetwork.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FormViewNetwork);
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  > div {
    flex-basis: 60%;
  }
  > button {
    background: #9c26b0;
    border-radius: 3;
    border: 0;
    padding: 11px 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  }
  @media (max-width: 768px) {
    justify-content: center;
    > div {
      flex-basis: 70%;
    }
    > button {
      margin-top: 0px;
    }
  }
  @media (max-width: 767px) {
    justify-content: center;
    > div {
      flex-basis: 100%;
    }
    > button {
      margin-top: 20px;
    }
  }
`;
