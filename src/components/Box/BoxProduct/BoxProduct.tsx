import { FC } from "react";
import { useDispatch } from "react-redux";
import currency from "currency.js";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Avatar,
} from "@material-ui/core";

import { addToCart } from "store/slices";

import { useTranslations } from "hooks";
import DialogOption from "./DialogOption";
import { IProduct } from "models/types";

import {
  useStyles,
  NameOfFood,
  Price,
  CustomCardHeader,
  FoodDetail,
  RestaurantName,
} from "./styles";

interface IProps {
  product: IProduct;
}

const BoxProduct: FC<IProps> = ({ product }: IProps) => {
  const classes = useStyles();
  const { id, avatar, name, detail, option, price, store } = product;

  const { i18n } = useTranslations();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const action = addToCart({
      id,
      product,
      quantity: 1,
    });
    dispatch(action);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={avatar} title={name} />

      <Box className={classes.detail}>
        <NameOfFood noWrap>{name}</NameOfFood>
        <FoodDetail noWrap>{detail}</FoodDetail>
        <Price noWrap>{currency(price).format()}</Price>
        <CustomCardHeader
          avatar={
            <Avatar
              alt={store.name}
              src={store.avatar}
              className={classes.avatar}
            ></Avatar>
          }
          title={<RestaurantName noWrap>{store.name}</RestaurantName>}
        />
      </Box>

      <CardActions
        className={
          option.length > 0 ? classes.action : classes.actionWithoutOptionBtn
        }
      >
        {option.length > 0 && <DialogOption product={product} />}
        <Button
          size="small"
          className={classes.addBtn}
          onClick={handleAddToCart}
        >
          {i18n.t("home_page.button_add")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BoxProduct;
