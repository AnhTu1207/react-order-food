import { FC } from "react";
import { Box, Button, Card, CardActions } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CardMedia from "@material-ui/core/CardMedia";

import { useTranslations } from "hooks";
import { useStyles, NameOfFood, Price, CustomCardHeader } from "./styles";
import { IProduct } from "models/types";

const BoxProduct: FC<{ product: IProduct }> = ({ product }) => {
  const classes = useStyles();
  const { i18n } = useTranslations();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.imgUrlFood}
        title={product.nameOfFood}
      />
      <Box className={classes.detail}>
        <NameOfFood noWrap>{product.nameOfFood}</NameOfFood>
        <Price noWrap>{product.price}</Price>
        <CustomCardHeader
          avatar={
            <Avatar
              alt={product.nameOfRestaurant}
              src={product.avatarRestaurant}
              className={classes.avatar}
            ></Avatar>
          }
          title={product.nameOfRestaurant}
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
