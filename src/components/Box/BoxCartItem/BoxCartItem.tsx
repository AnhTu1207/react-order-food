import { FC } from "react";
import currency from "currency.js";
import { Avatar, Card, Typography } from "@material-ui/core";
import { Add, DeleteOutline, Remove } from '@material-ui/icons';

import { ICartItem } from "models/types";
import { ActionBox, CustomCardHeader, CustomCartContent, CustomIconButton, FoodName, Quantity, RestaurantName, useStyles } from "./styles";

interface IProps {
    cartItem: ICartItem
    isCartDrawer: boolean
}

const BoxCartItem: FC<IProps> = ({ cartItem, isCartDrawer }: IProps) => {
    const classes = useStyles()
    const price = currency(cartItem.price).format()
    return (
        <Card
            className={classes.root}
            style={isCartDrawer ? { width: 230 } : {}}
        >
            <CustomCardHeader
                className={classes.restaurantBox}
                avatar={
                    <Avatar
                        className={classes.avataRestaurant}
                        alt={cartItem.restaurantName}
                        src={cartItem.avatarRestaurant}
                    />
                }
                title={
                    <RestaurantName noWrap>{cartItem.restaurantName}</RestaurantName>
                }
            />
            <CustomCartContent
                style={isCartDrawer ? { display: "block" } : {}}

            >
                <CustomCardHeader
                    className={classes.foodBox}
                    avatar={
                        <Avatar
                            className={classes.imgFood}
                            alt={cartItem.foodName}
                            src={cartItem.imgUrlFood}
                        />
                    }
                    title={
                        <FoodName noWrap>{cartItem.foodName}</FoodName>
                    }
                    subheader={
                        <Typography>{price}</Typography>
                    }
                />

                <ActionBox>
                    <CustomIconButton>
                        <DeleteOutline className={classes.icon} />
                    </CustomIconButton>
                    <CustomIconButton>
                        <Remove className={classes.icon} />
                    </CustomIconButton>
                    <Quantity>{cartItem.quantity}</Quantity>
                    <CustomIconButton>
                        <Add className={classes.icon} />
                    </CustomIconButton>
                </ActionBox>
            </CustomCartContent>
        </Card>
    )
}

export default BoxCartItem