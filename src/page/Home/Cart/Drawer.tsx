import { FC } from "react";
import { useSelector } from "react-redux";
import { SwipeableDrawer } from "@material-ui/core";

import { BoxCartItem } from "components/Box/BoxCartItem";

import {
  CheckoutButton,
  CloseButtonDrawer,
  CustomChevronRightIcon,
  CustomDivider,
  DrawerContentWrapper,
  DrawerHeader,
} from "./styles";

import { RootState } from "store";
import { CustomCartIcon } from "./styles";
import { useTranslations } from "hooks";

interface IProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const Drawer: FC<IProps> = ({ open, onClose, onOpen }: IProps) => {
  const { i18n } = useTranslations();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        <DrawerContentWrapper>
          <DrawerHeader>
            <CustomCartIcon />
            <CloseButtonDrawer onClick={onClose}>
              <CustomChevronRightIcon />
            </CloseButtonDrawer>
          </DrawerHeader>
          <CustomDivider />
          {cartItems.map((item, index) => (
            <BoxCartItem key={index} cartItem={item} isCartDrawer={true} />
          ))}
          {cartItems.length > 0 && (
            <CheckoutButton size="large">
              {i18n.t("home_page.check_out")}
            </CheckoutButton>
          )}
        </DrawerContentWrapper>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
