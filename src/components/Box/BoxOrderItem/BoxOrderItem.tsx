import { FC } from "react";
import { Avatar, Card } from "@material-ui/core";
import { EventNoteOutlined } from "@material-ui/icons";

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

import { OrderItem } from "assets";

const BoxOrderItem: FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.rootWithFullWidth}>
      {OrderItem.map((order) => (
        <>
          {order.products?.map((product, index) => (
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
                  product.options && (
                    <OptionName noWrap>
                      {product.options
                        ?.map((option) => <>{option.name}</>)
                        .reduce(
                          (prev, curr) => (
                            <>{[prev, ",  ", curr]}</>
                          ),
                          <></>
                        )}
                    </OptionName>
                  )
                }
              />

              <ActionBox>
                <CustomIconButton disabled>
                  <EventNoteOutlined className={classes.icon} />
                </CustomIconButton>
                <Quantity>1</Quantity>
              </ActionBox>
            </CustomCartContent>
          ))}
        </>
      ))}
    </Card>
  );
};

export default BoxOrderItem;
