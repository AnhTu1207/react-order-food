import { FC, useState } from "react";
import { IconButton } from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";


import { CustomBadge, useStyle } from "./styles";
import Drawer from "./Drawer";

const Cart: FC = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton className={classes.cartButton} onClick={() => setOpen(true)}>
        <CustomBadge color="primary" variant="dot">
          <ShoppingBasket className={classes.cartIcon} />
        </CustomBadge>
      </IconButton>
      <Drawer
        open={open}
        onOpen={() => {}}
        onClose={() => setOpen(false)}
      ></Drawer>
    </>
  );
};

export default Cart;
