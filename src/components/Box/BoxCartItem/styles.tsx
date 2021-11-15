import {
  withTheme,
  Typography,
  CardHeader,
  IconButton,
  Box,
  CardContent,
} from "@material-ui/core";
import {
  styled,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootWithPx: {
      marginTop: 15,
      width: 380,
      [theme.breakpoints.down("xs")]: {
        width: "95vw",
      },
    },
    rootWithFullWidth: {
      marginTop: 15,
      width: "100%",
    },
    imgFood: {
      width: 50,
      height: 50,
    },
    restaurantBox: {
      padding: 5,
      borderBottom: "1px solid #d8d8d8",
    },
    avataRestaurant: {
      width: 30,
      height: 30,
    },
    foodBox: {
      padding: 0,
    },
    icon: {
      color: "var(--color-primary)",
      fontSize: 15,
      "&:hover": {
        color: "#FFF",
        transition: "0.5s",
      },
    },
  })
);

export const FoodName = styled(Typography)({
  fontWeight: 500,
});

export const RestaurantName = styled(Typography)({
  fontSize: 13,
});

export const CustomCardHeader = styled(CardHeader)({
  width: "100%",
  "&& .MuiCardHeader-content": {
    width: "80%",
  },
});

interface CartContentProps {
  display: string;
  theme: Theme;
}

export const CustomCartContent = styled(withTheme(CardContent))(
  ({ ...props }: CartContentProps) => ({
    borderBottom: "1px solid #d8d8d8",
    justifyContent: "space-between",
    alignItems: "center",
    display: props.display,
    "&& .MuiCardHeader-root": {
      [props.theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    [props.theme.breakpoints.down("xs")]: {
      display: "block",
    },
  })
);

export const Quantity = styled(Typography)({
  display: "inline",
  marginLeft: 8,
  fontSize: 16,
});

export const CustomIconButton = styled(IconButton)({
  border: "1px solid var(--color-primary)",
  padding: 5,
  marginLeft: 8,
  "&:hover": {
    backgroundColor: "var(--color-button-hover)",
    transition: "0.5s",
  },
});

export const ActionBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: 5,
});

export const OptionName = styled(Typography)({
  fontSize: 13,
  margin: "7px 0 10px 10px",
});
