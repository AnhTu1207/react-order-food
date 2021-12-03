import { FC, useMemo, useState } from "react";
import { Avatar, Card, Typography, Button } from "@material-ui/core";
import { EventNoteOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { map } from "lodash";

import { RootState } from "store";
import { getVndPrice } from "utils";

import ModalPaymentMethod from "./ModalPaymentMethod";
import { useCreateOrder } from "api/order";

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
import { Spinner } from "components";

type Props = {
  onPaymentSuccess: () => void;
}

const BoxOrderItem: FC<Props> = ({ onPaymentSuccess }: Props) => {
  const classes = useStyles();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [openModal, setOpenModal] = useState(false);
  const [isVisibileCheckButton, setVisibileCheckouButton] = useState(true);

  const { isLoading: creatingOrder, runRequest: createOrder } = useCreateOrder({
    successCallback: () => {
      setVisibileCheckouButton(false);
      onPaymentSuccess();
    },
  });

  const totalPrice = useMemo(() => {
    if (!cartItems.length) return 0;

    return cartItems
      .map((item) =>
        item.products.reduce((total, p) => (total += p.price * p.quantity), 0)
      )
      .reduce((total, i) => (total += i), 0);
  }, [cartItems]);

  const onClickPayment = (paymentMethod: string) => {
    setOpenModal(false);
    const mappedObject = {
      store_id: cartItems.map((item) => item.storeId.toString()) as string[],
      total: totalPrice,
      payment_option: "cash",
      address: "address",
      user_id: sessionStorage.getItem("user_id") as string,
      items: getFoodItems(),
    };

    createOrder(mappedObject);
  };

  const getFoodItems = () => {
    let items: {
      food_id: string;
      qty: number;
      price: number;
    }[] = [];

    cartItems.map((item) => {
      return item.products.map((p) => {
        items.push({
          food_id: p.id.toString(),
          qty: p.quantity,
          price: p.price,
        });
        return {
          food_id: p.id,
          qty: p.quantity,
          price: p.price,
        };
      });
    });

    return items;
  };

  return (
    <Card className={classes.rootWithFullWidth}>
      {map(cartItems, (order) => (
        <>
          {map(order.products, (product, index) => (
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
        </>
      ))}
      {!!(cartItems.length && isVisibileCheckButton) && (
        <>
          <CustomCartContent display="flex">
            <Typography>Total: {getVndPrice(totalPrice)}</Typography>
            <Button
              variant="contained"
              className={classes.checkoutButton}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              {creatingOrder ? <Spinner color="#FFF" size={14} /> : "Check out"}
            </Button>
          </CustomCartContent>
          <ModalPaymentMethod
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            onClickPayment={onClickPayment}
          />
        </>
      )}
    </Card>
  );
};

export default BoxOrderItem;
