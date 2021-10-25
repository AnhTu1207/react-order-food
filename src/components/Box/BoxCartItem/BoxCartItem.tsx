import { FC } from "react";
import { useDispatch } from "react-redux";
import currency from "currency.js";
import { Avatar, Card, Typography } from "@material-ui/core";
import { Add, DeleteOutline, Remove } from "@material-ui/icons";

import { removeFormCart, minusQuantity, plusQuantity } from "store/slices";
import {
  ActionBox,
  CustomCardHeader,
  CustomCartContent,
  CustomIconButton,
  FoodName,
  Quantity,
  RestaurantName,
  useStyles,
} from "./styles";
import { ICartItem } from "models/types";

interface IProps {
  cartItem: ICartItem;
  isCartDrawer: boolean;
}

const BoxCartItem: FC<IProps> = ({ cartItem, isCartDrawer }: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, quantity, id } = cartItem;
  const { avatar, name, price, store } = product;
  const formatPrice = currency(price).format();

  const handlePlusQuantity = () => {
    const action = plusQuantity({
      id,
      quantity: 1,
    });
    dispatch(action);
  };

  const handleMinusQuantity = () => {
    const action = minusQuantity({
      id,
      quantity: 1,
    });
    dispatch(action);
  };

  const handleRemoveFormCart = () => {
    const action = removeFormCart({ id });
    dispatch(action);
  };

  return (
    <Card
      className={isCartDrawer ? classes.rootWithPx : classes.rootWithFullWidth}
    >
      <CustomCardHeader
        className={classes.restaurantBox}
        avatar={
          <Avatar
            className={classes.avataRestaurant}
            alt={store.name}
            src={store.avatar}
          />
        }
        title={<RestaurantName noWrap>{store.name}</RestaurantName>}
      />
      <CustomCartContent display={isCartDrawer ? "block" : "flex"}>
        <CustomCardHeader
          className={classes.foodBox}
          avatar={
            <Avatar className={classes.imgFood} alt={name} src={avatar} />
          }
          title={<FoodName noWrap>{name}</FoodName>}
          subheader={<Typography>{formatPrice}</Typography>}
        />

        <ActionBox>
          <CustomIconButton onClick={handleRemoveFormCart}>
            <DeleteOutline className={classes.icon} />
          </CustomIconButton>
          <CustomIconButton onClick={handleMinusQuantity}>
            <Remove className={classes.icon} />
          </CustomIconButton>
          <Quantity>{quantity}</Quantity>
          <CustomIconButton onClick={handlePlusQuantity}>
            <Add className={classes.icon} />
          </CustomIconButton>
        </ActionBox>
      </CustomCartContent>
    </Card>
  );
};

export default BoxCartItem;
