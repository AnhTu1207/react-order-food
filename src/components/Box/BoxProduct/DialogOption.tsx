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
import { IProduct, IFoodOption, IList } from "models/types";

interface IProps {
  product: IProduct;
}

interface ListItem {
  index: number;
  value: boolean;
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
    product.options.forEach((option, index) => {
      setOpenListItem((preState: any) => ({
        ...preState,
        [index]: true,
      }));
    });
  }, []);

  useEffect(() => {
    product.options.forEach((option, index) => {
      if (option.type === "radio") {
        setRadioState((preState: any) => ({
          ...preState,
          [option.id]: option.list[0].id,
        }));
      }

      if (option.type === "checkbox") {
        const result = option.list.map((item, index) => {
          return { [item.id]: false };
        });
        setCheckboxState((preState: any) => ({
          ...preState,
          [option.id]: result,
        }));
      }
    });
  }, []);

  console.log(openListItem);

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

  const handleCheckboxChange = (index: any, optionId: any, e: any) => {
    const listId = e.target.value;
    const checked = e.target.checked;

    const newCheckboxState = [...checkboxState[optionId]];
    newCheckboxState[index][listId] = checked;

    setCheckboxState((preState: any) => ({
      ...preState,
      [optionId]: newCheckboxState,
    }));
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
          {product.options.map((option, index) => (
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
                                    onChange={(e) =>
                                      handleCheckboxChange(index, option.id, e)
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
