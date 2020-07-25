import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Button,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Input,
  InputLabel,
} from "@material-ui/core";
import PapperBlock from "../PapperBlock/PapperBlock";
import styled from "styled-components";
import { Modal } from "antd";
import { bonusPublic } from "../../provider/web3Public";
import { Web3Context } from "../../provider/web3";
import { message } from "antd";

const BlackListInfomation = () => {
  const widthPopup = window.innerWidth;
  const { bonus } = useContext(Web3Context);
  const [isRun, setIsRun] = useState(true);
  const [price, setPrice] = useState(100);
  const [percent, setPercent] = useState({
    m6: 6,
    m12: 12,
    m18: 20,
  });
  useEffect(()=>{
    bonusPublic.methods.isRun().call().then(run =>{
      setIsRun(run)
    })
  })
  useEffect(() => {
    bonusPublic.methods
      .getPercent()
      .call()
      .then((percent) => {
        setPercent({
          m6: percent[0] / 100,
          m12: percent[1] / 100,
          m18: percent[2] / 100,
        });
      });
  }, []);
  useEffect(() => {
    bonusPublic.methods
      .priceOTF()
      .call()
      .then((ote) => {
        setPrice(ote / 100);
      });
  }, []);
  const handlePecent = (e) => {
    setPercent({
      ...percent,
      [e.target.name]: e.target.value,
    });
  };
  const { m6, m12, m18 } = percent;
  const [open, setOpen] = useState({
    bonus: false,
    price: false,
    percent: false,
  });

  const onBonus = () => {
    console.log("bonus", isRun);
    bonus.bonus({ value: 0 }, (err) => {
      if (err) {
        console.log(err.message);
        message.error(err.message);
      } else {
        message.info("Bonus success!");
        console.log("Bonus success!");
      }
    });
  };
  const onChangePrice = () => {
    console.log("bonus", price);
    bonus.changePrice(Math.floor(price * 100), { value: 0 }, (err) => {
      if (err) {
        console.log(err.message);
        message.error(err.message);
      } else {
        message.info("Change price success!");
        console.log("Change Price success!");
      }
    });
  };
  const onChangePercent = () => {
    console.log("bonus", percent);
    bonus.changePercent(
      Math.floor(percent.m6 * 100),
      Math.floor(percent.m12 * 100),
      Math.floor(percent.m18 * 100),
      { value: 0 },
      (err) => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Change Perccent success!");
          console.log("Change Perccent success!");
        }
      }
    );
  };
  return (
    <PapperBlock
      noMargin
      title="Infomation"
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      <Grid container spacing={4}>
        <Wrap>
          <Item>
            <div className="name">
              <span>M6:</span>
              {m6}%
            </div>
            <div className="name">
              <span>M12:</span>
              {m12}%
            </div>
            <div className="name">
              <span>M18:</span>
              {m18}%
            </div>

            {/* <Button onClick={() => setOpen({ ...open, bonus: true })} variant="contained" color="primary">Bonus</Button> */}
            <Button
              onClick={() => setOpen({ ...open, percent: true })}
              variant="contained"
              color="primary"
            >
              Change Percent
            </Button>
          </Item>
          <Item>
            {/* <div className="name"><span>M12:</span>{m12}%</div> */}
            <div className="info-line">
              <span>Price</span>
              {price}
            </div>
            <Button
              onClick={() => setOpen({ ...open, price: true })}
              variant="contained"
              color="primary"
            >
              Change price
            </Button>
          </Item>
          {open.price && (
            <Modal
              title="Change Price"
              visible={open.price}
              onCancel={() => setOpen({ ...open, price: false })}
              footer={null}
              width={widthPopup >= 1200 ? "30%" : "80%"}
            >
              <WrapInput>
                <div className="isrun">
                  <div className="title">Price:</div>
                  <div className="select">
                    <FormControl>
                      {/* <InputLabel htmlFor="name-simple">
                                            Price
                                        </InputLabel> */}
                      <Input
                        id="name-simple34"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={onChangePrice}
                >
                  Change Price
                </Button>
              </WrapInput>
            </Modal>
          )}
          <Item>
            <div className="info-line">
              <span>Is Run:</span>
              {isRun ? "true" : "false"}{" "}
            </div>
            <div className="info-line" />
            {/* <Button onClick={() => setOpen({ ...open, percent: true })} variant="contained" color="primary">Change Percent</Button> */}
            <Button
              onClick={() => onBonus()}
              variant="contained"
              color="primary"
            >
              Bonus
            </Button>
          </Item>
          {open.percent && (
            <Modal
              title="Change Percent"
              visible={open.percent}
              onCancel={() => setOpen({ ...open, percent: false })}
              footer={null}
              width={widthPopup >= 1200 ? "40%" : "80%"}
            >
              <WrapInput className="percent">
                <div className="isrun-e">
                  <div className="change-per">
                    <FormControl>
                      <InputLabel htmlFor="name-simple">M8</InputLabel>
                      <Input
                        name="m6"
                        id="name-simple34"
                        value={m6}
                        onChange={handlePecent}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="name-simple">M12</InputLabel>
                      <Input
                        name="m12"
                        id="name-simple34"
                        value={m12}
                        onChange={handlePecent}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="name-simple">M18</InputLabel>
                      <Input
                        name="m18"
                        id="name-simple34"
                        value={m18}
                        onChange={handlePecent}
                      />
                    </FormControl>
                  </div>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={onChangePercent}
                >
                  Change
                </Button>
              </WrapInput>
            </Modal>
          )}
        </Wrap>
      </Grid>
    </PapperBlock>
  );
};

export default BlackListInfomation;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .name,
  .info-line {
    margin: 5px 0 10px;
    span {
      margin-right: 15px;
    }
  }
  /* .info-line{
        margin:5px 0 15px;
        
    } */
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
const Item = styled.div`
  width: 30%;
  margin: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .isrun {
    display: flex;
    align-items: center;
    font-size: 16px;
    flex-wrap: wrap;
    .title {
      margin-right: 15px;
    }
    .MuiFormGroup-root {
      display: flex;
      flex-direction: row;
    }
    .MuiFormControl-root {
      width: 250px;
    }
  }
  .change-per {
    display: flex;
    align-items: center;
  }

  &.percent {
    align-items: flex-end;
    .isrun-e {
      .MuiFormControl-root {
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    .isrun {
      margin: 15px 0;
    }
    .change-per {
      margin: 15px 0;
    }
  }
`;
