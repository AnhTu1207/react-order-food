import { FC, useMemo, useState } from "react";
import {
  Avatar,
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import { EventNoteOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { map, reduce } from "lodash";

import { RootState } from "store";
import { useTranslations } from "hooks";
import { getVndPrice } from "utils";

import {
  ActionBox,
  CustomCardHeader,
  CustomCartContent,
  CustomIconButton,
  FoodName,
  Quantity,
  useStyles,
  OptionName,
} from "./style";

enum PaymentType {
  ZALO = "zalo",
  COD = "cod",
  MOMO = "momo",
}

const BoxOrderItem: FC = () => {
  const classes = useStyles();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { i18n } = useTranslations();
  const [paymentType, setPaymentType] = useState(PaymentType.COD);

  const cartItemsMapped = useMemo(() => {
    if (!cartItems || !cartItems.length) return;

    return map(cartItems, (item) =>
      map(item.products, (p) => ({
        ...p,
        storeId: item.storeId,
        storeAvt: item.storeAvatar,
        storeName: item.storeName,
      }))
    )[0];
  }, [cartItems]);

  return (
    <Card className={classes.rootWithFullWidth}>
      {map(cartItemsMapped, (product, index) => (
        <CustomCartContent display={"flex"} key={index}>
          <CustomCardHeader
            className={classes.foodBox}
            avatar={
              <Avatar
                className={classes.imgFood}
                alt={product.name}
                src={product.avatar}
              />
            }
            title={<FoodName noWrap>{product.name}</FoodName>}
            subheader={
              <OptionName noWrap>
                {getVndPrice(product.price * product.quantity)}
              </OptionName>
            }
          />

          <ActionBox>
            <CustomIconButton disabled>
              <EventNoteOutlined className={classes.icon} />
            </CustomIconButton>
            <Quantity>{product.quantity}</Quantity>
          </ActionBox>
        </CustomCartContent>
      ))}
      {cartItemsMapped?.length && (
        <>
          <CustomCartContent display="flex">
            <div>
              <Typography>
                {i18n.t("check_out.total")}:{" "}
                {getVndPrice(
                  reduce(
                    cartItemsMapped,
                    (sum, item) => (sum += item.price * item.quantity),
                    0
                  )
                )}
              </Typography>
              <div className={classes.paymentWrapper}>
                <Typography className={classes.paymentTitle}>
                  {i18n.t("check_out.payment_method")}
                </Typography>
                <Select value={paymentType} className={classes.paymentMethod}>
                  <MenuItem
                    value={PaymentType.COD}
                    onClick={() => setPaymentType(PaymentType.COD)}
                  >
                    {i18n.t("check_out.cod")}
                  </MenuItem>
                  <MenuItem
                    value={PaymentType.MOMO}
                    onClick={() => setPaymentType(PaymentType.MOMO)}
                    disabled
                  >
                    {i18n.t("check_out.momo")}
                  </MenuItem>
                  <MenuItem
                    value={PaymentType.ZALO}
                    onClick={() => setPaymentType(PaymentType.ZALO)}
                    disabled
                  >
                    {i18n.t("check_out.zalo_pay")}
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className={classes.right}>
              <Button variant="contained" className={classes.button}>
                Checkout
              </Button>
            </div>
          </CustomCartContent>
        </>
      )}
    </Card>
  );
};

export default BoxOrderItem;
