import { FC } from "react";
import currency from "currency.js";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Avatar,
  IconButton,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useTranslations } from "hooks";
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
  const { i18n } = useTranslations();
  const price = currency(product.price).format();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.imgUrlFood}
        title={product.nameOfFood}
      />
      <Box className={classes.detail}>
        <NameOfFood noWrap>{product.nameOfFood}</NameOfFood>
        <FoodDetail noWrap>{product.foodDetail}</FoodDetail>
        <Price noWrap>{price}</Price>
        <CustomCardHeader
          avatar={
            <Avatar
              alt={product.nameOfRestaurant}
              src={product.avatarRestaurant}
              className={classes.avatar}
            ></Avatar>
          }
          title={
            <RestaurantName noWrap>{product.nameOfRestaurant}</RestaurantName>
          }
        />
      </Box>

      <CardActions className={classes.action}>
        <IconButton className={classes.detailBtn} aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
        <Button size="small" className={classes.addBtn}>
          {i18n.t("home_page.button_add")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BoxProduct;
