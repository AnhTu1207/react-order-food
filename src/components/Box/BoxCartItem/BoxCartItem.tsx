import { FC, useEffect, useState } from "react";
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
  OptionName,
} from "./styles";
import { ICartItem } from "models/types";

interface IProps {
  cartItem: ICartItem;
  isCartDrawer: boolean;
}

const BoxCartItem: FC<IProps> = ({ cartItem, isCartDrawer }: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, quantity, id, cartOptions } = cartItem;
  const { avatar, name, store } = product;

  const [price, setPrice] = useState<number>(product.price);
  const formatPrice = currency(price * quantity).format();

  useEffect(() => {
    cartOptions?.forEach((option) => {
      setPrice((prePrice) => prePrice + option.price);
    });
  }, []);

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
        <OptionName noWrap>
          {cartOptions
            ?.map((option) => <>{option.name}</>)
            .reduce((prev, curr) => (
              <>{[prev, ",  ", curr]}</>
            ))}
        </OptionName>
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
