import { FC } from "react";
import currency from "currency.js";
import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import { Add, DeleteOutline, Remove} from '@material-ui/icons';

import { ICartItem } from "models/types";
import { ActionBox, CustomCardHeader, CustomIconButton, FoodName, Quantity, RestaurantName, useStyles } from "./styles";

interface IProps{
    cartItem: ICartItem
}

const BoxCartItem : FC<IProps> = ({cartItem}:IProps)=>{
    const classes = useStyles()
    const price = currency(cartItem.price).format()
    return (
        <Card className={classes.root}>
            <CustomCardHeader
            className = {classes.restaurantBox}
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
            <CardContent>
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
            </CardContent>
        </Card>
    )
}

export default BoxCartItem