import { withTheme, Typography, CardHeader, IconButton, Box, CardContent } from "@material-ui/core";
import { styled, makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme)=>
    createStyles({
        root:{
            marginTop: 15,
            width: "100%",
        },
        imgFood:{
            width: 50,
            height: 50
        },
        restaurantBox: {
            padding: 5,
            borderBottom: "1px solid #d8d8d8",
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

export const CustomCartContent = styled(withTheme(CardContent))((props)=>({
    borderBottom: "1px solid #d8d8d8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&& .MuiCardHeader-root":{
        [props.theme.breakpoints.down("md")]: {
            width: "60%"
        },
    },
    [props.theme.breakpoints.down("xs")]: {
        display: "block",
      },
}))

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