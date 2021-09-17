import { Box, Button, Avatar, IconButton } from "@material-ui/core";
import { MoreHoriz, Add, Remove } from "@material-ui/icons";
import DialogTitle from "./DialogTitle";
import React, { FC } from "react";
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
} from "./styles";
import ListOptions from "./ListOptions";
import { IProduct } from "models/types";
import { useTranslations } from "hooks";

interface IProps {
  product: IProduct;
}

const DialogOption: FC<IProps> = ({ product }: IProps) => {
  const classes = dialogOptionStyles();
  const { i18n } = useTranslations();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen} className={classes.openBtn}>
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
          {product.option.map((option) => (
            <ListOptions key={option.id} option={option} />
          ))}
        </DialogContent>

        <DialogActions>
          <Box className={classes.boxQuantity}>
            <IconButton className={classes.decreaseBtn}>
              <Remove className={classes.decreaseIcon} />
            </IconButton>
            <input type="string" className={classes.quantity} value={1} />
            <IconButton className={classes.increaseBtn}>
              <Add className={classes.increaseIcon} />
            </IconButton>
          </Box>

          <Button autoFocus onClick={handleClose} className={classes.addBtn}>
            ADD 1 TO CART $11.48
          </Button>
        </DialogActions>
      </CustomDialog>
    </div>
  );
};
export default DialogOption;
