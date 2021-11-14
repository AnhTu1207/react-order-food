import {
  Box,
  Button,
  Avatar,
  IconButton,
  Collapse,
  FormControlLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  RadioGroup,
} from "@material-ui/core";
import {
  MoreHoriz,
  Add,
  Remove,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import React, { FC, useEffect, useState } from "react";
import currency from "currency.js";

import {
  DialogContent,
  DialogActions,
  dialogOptionStyles,
  CustomDialog,
  FoodDetail,
  CustomDivider,
  TypographyBold,
  CustomCardHeader,
  RestaurantName,
  CustomCheckBox,
  CustomFormControl,
  CustomListItem,
  CustomListItemIcon,
  CustomRadio,
  ListItemOptionTitle,
  ListItemPrice,
} from "./styles";

import { useTranslations } from "hooks";
import DialogTitle from "./DialogTitle";
import { IProduct } from "models/types";

interface IProps {
  product: IProduct;
}
interface IList {
  id: number;
  name: string;
  price: number;
}

const DialogOption: FC<IProps> = ({ product }: IProps) => {
  const classes = dialogOptionStyles();
  const { i18n } = useTranslations();

  const [open, setOpen] = useState(false);
  const [openListItem, setOpenListItem] = useState<any>({});

  const [radioState, setRadioState] = useState<any>({});
  const [checkboxState, setCheckboxState] = useState<any>(false);
  const [optionState, setOptionState] = useState<Array<IList>>();

  useEffect(() => {
    product.option.forEach((o, index) => {
      setOpenListItem((preState: any) => ({
        ...preState,
        [index]: true,
      }));
    });
  }, []);

  useEffect(() => {
    product.option.forEach((o, index) => {
      if (o.type === "radio") {
        setRadioState((preState: any) => ({
          ...preState,
          [o.id]: o.list[0].id,
        }));
      }

      if (o.type === "checkbox") {
        const result = o.list.map((l, index) => {
          return { [index]: true };
        });
        setCheckboxState((preState: any) => ({
          ...preState,
          [o.id]: result,
        }));
      }
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRadioChange = (e: any, optionId: any) => {
    const value = parseInt(e.target.value);
    setRadioState((preState: any) => ({
      ...preState,
      [optionId]: value,
    }));
  };

  const handleCheckboxChange = (index: any, optionId: any, listId: any) => {
    const result = checkboxState[optionId].map((item: any, i: any) => {
      if (i === index) {
        return (item[index] = !item[index]);
      }
    });
    console.log(result);

    // console.log(listId);

    // console.log(checkboxState[optionId]);

    // setCheckboxState({
    //   ...checkboxState,
    //   [optionId]: [index:{[index]: !index}],
    // });
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        className={classes.openBtn}
      >
        <MoreHoriz />
      </IconButton>

      <CustomDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {i18n.t("home_page.menu_items")}
        </DialogTitle>

        <DialogContent dividers>
          <img
            className={classes.dialogImg}
            src={product.avatar}
            alt={product.name}
          />
          <TypographyBold noWrap>{product.name}</TypographyBold>
          <TypographyBold>{currency(product.price).format()}</TypographyBold>
          <FoodDetail noWrap>{product.detail}</FoodDetail>
          <CustomDivider />
          <TypographyBold> {i18n.t("home_page.store")}</TypographyBold>
          <CustomCardHeader
            className={classes.restaurant}
            avatar={
              <Avatar
                alt={product.store.name}
                src={product.store.avatar}
                className={classes.avatar}
              ></Avatar>
            }
            title={<RestaurantName noWrap>{product.store.name}</RestaurantName>}
          />
          {product.option.map((option, index) => (
            <div>
              <CustomListItem
                button
                onClick={() => {
                  setOpenListItem((preState: any) => ({
                    ...preState,
                    [index]: !openListItem[index],
                  }));
                }}
              >
                <ListItemOptionTitle primary={option.label} />
                {openListItem[index] ? <ExpandLess /> : <ExpandMore />}
              </CustomListItem>

              <Collapse in={openListItem[index]} timeout="auto" unmountOnExit>
                <List>
                  <CustomFormControl>
                    {option.type === "radio" && (
                      <RadioGroup
                        name={option.label}
                        value={radioState[option.id]}
                        onChange={(e) => {
                          handleRadioChange(e, option.id);
                        }}
                      >
                        {option.list.map((list, index) => (
                          <ListItem key={list.id}>
                            <CustomListItemIcon>
                              <FormControlLabel
                                value={list.id}
                                control={<CustomRadio />}
                                label={list.name}
                              ></FormControlLabel>
                            </CustomListItemIcon>

                            <ListItemSecondaryAction>
                              <ListItemPrice
                                primary={`${currency(list.price).format()}`}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </RadioGroup>
                    )}

                    {option.type === "checkbox" && (
                      <>
                        {option.list.map((list, index) => (
                          <ListItem key={list.id}>
                            <CustomListItemIcon>
                              <FormControlLabel
                                value={list.id}
                                control={
                                  <CustomCheckBox
                                    checked={
                                      checkboxState[list.id] &&
                                      checkboxState[list.id][index][index]
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(
                                        index,
                                        option.id,
                                        list.id
                                      )
                                    }
                                    name={list.name}
                                    value={list.id}
                                  />
                                }
                                label={list.name}
                              ></FormControlLabel>
                            </CustomListItemIcon>

                            <ListItemSecondaryAction>
                              <ListItemPrice
                                primary={`${currency(list.price).format()}`}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </>
                    )}
                  </CustomFormControl>
                </List>
              </Collapse>
              <CustomDivider />
            </div>
          ))}
        </DialogContent>

        <DialogActions>
          <Box className={classes.boxQuantity}>
            <IconButton className={classes.decreaseBtn}>
              <Remove className={classes.decreaseIcon} />
            </IconButton>
            <input
              type="string"
              className={classes.quantity}
              defaultValue={1}
            />
            <IconButton className={classes.increaseBtn}>
              <Add className={classes.increaseIcon} />
            </IconButton>
          </Box>

          <Button autoFocus onClick={handleClose} className={classes.addBtn}>
            {i18n.t("home_page.add_to_cart")}
          </Button>
        </DialogActions>
      </CustomDialog>
    </div>
  );
};
export default DialogOption;
