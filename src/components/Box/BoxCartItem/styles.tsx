import { makeStyles, Theme, createStyles, withTheme, Typography, CardHeader, IconButton, Box } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export const useStyles = makeStyles((theme:Theme)=>
    createStyles({
        root:{
            marginTop: 15,
            width: 230,
            "&& .MuiCardContent-root":{
                borderBottom: "1px solid lightgray",
            }
        },
        imgFood:{
            width: 50,
            height: 50
        },
        restaurantBox: {
            padding: 5,
            borderBottom: "1px solid lightgray",
        },
        avataRestaurant:{
            width:30,
            height:30
        },
        foodBox:{
            padding: 0,
        },
        icon:{
            color: "var(--color-primary)",
            fontSize: 15,
            "&:hover":{
                color: "#FFF",
                transition: "0.5s"
            }
        },
    })
)


export const FoodName = styled(Typography)({
    fontWeight: 500,
})

export const RestaurantName = styled(Typography)({
    fontSize: 13
})

export const CustomCardHeader = styled(CardHeader)({
    width: "100%",
    "&& .MuiCardHeader-content": {
        width:"70%"
      },
})

export const Quantity = styled(Typography)({
    display: "inline",
    marginLeft: 8,
    fontSize: 16
})

export const CustomIconButton = styled(IconButton)({
    border: "1px solid var(--color-primary)",
    padding: 5,
    marginLeft: 8,
    "&:hover":{
        backgroundColor: "var(--color-button-hover)",
        transition: "0.5s"
    }
})

export const ActionBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 5
})
