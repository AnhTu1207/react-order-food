import { FC } from "react";
import currency from "currency.js";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Avatar,
} from "@material-ui/core";

import { useTranslations } from "hooks";
import { IProduct } from "models/types";

import {
  useStyles,
  NameOfFood,
  Price,
  CustomCardHeader,
  FoodDetail,
} from "./styles";
import DialogOption from "./DialogOption";

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
        image={product.avatar}
        title={product.name}
      />
      <Box className={classes.detail}>
        <NameOfFood noWrap>{product.name}</NameOfFood>
        <FoodDetail noWrap>{product.detail}</FoodDetail>
        <Price noWrap>{price}</Price>
        <CustomCardHeader
          avatar={
            <Avatar
              alt={product.store.name}
              src={product.store.avatar}
              className={classes.avatar}
            ></Avatar>
          }
          title={product.store.name}
        />
      </Box>

      <CardActions className={classes.action}>
        <DialogOption product={product} />
        <Button size="small" className={classes.addBtn}>
          {i18n.t("home_page.button_add")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BoxProduct;
