import {
  createStyles,
  Theme,
  makeStyles,
  styled,
} from "@material-ui/core/styles";
import { CardHeader, Typography, withTheme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      height: 150,
      background: "none",
      border: "1px solid #808080",
      borderRadius: 8,
      padding: 5,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        height: 300,
      },
    },
    avatar: {
      border: "1px solid var(--color-primary)",
      width: 30,
      height: 30,
    },
    media: {
      borderRadius: 8,
      flex: "1 1 20%",
      [theme.breakpoints.down("xs")]: {
        flexBasic: "50%",
      },
    },
    detail: {
      flex: "3 3 60%",
      display: "block",
      width: "60%",
      padding: 10,
      boxSizing: "border-box",
      margin: "auto",
      "&& .MuiCardHeader-root": {
        padding: 0,
      },
      [theme.breakpoints.down("md")]: {
        flexBasic: "35%",
      },
      [theme.breakpoints.down("sm")]: {
        flex: 0,
      },
      [theme.breakpoints.down("xs")]: {
        width: "80vw",
      },
    },
    addBtn: {
      background: "var(--color-primary)",
      color: "#FFFF",
      fontSize: "14px",
      padding: "6px 25px",
      "&:hover": {
        background: "var(--color-button-hover)",
      },
    },
    detailBtn: {
      border: "1px solid var(--color-primary)",
      color: "var(--color-primary)",
      boxSizing: "border-box",
      padding: 5,
      "&:hover": {
        background: "var(--color-button-hover)",
        transition: "0.5s",
        color: "#FFFF",
      },
    },
    action: {
      flex: "1 1 20%",
      width: "20%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        flex: "0",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        aligItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        borderTop: "1px solid #ebebeb",
      },
    },
  })
);

export const NameOfFood = styled(withTheme(Typography))((props) => ({
  fontWeight: "bold",
  fontSize: 20,
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: 1.5,
  width: "100%",
  [props.theme.breakpoints.down("xs")]: {
    lineHeight: 1,
  },
}));

export const Price = styled(withTheme(Typography))((props) => ({
  fontWeight: "bolder",
  fontSize: 16,
  lineHeight: 1.5,
  [props.theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
}));

export const FoodDetail = styled(withTheme(Typography))((props) => ({
  fontWeight: "lighter",
  fontSize: 15,
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  lineHeight: 2,
  [props.theme.breakpoints.down("xs")]: {
    lineHeight: 2,
  },
}));

export const RestaurantName = styled(withTheme(Typography))((props) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: 15,
}));

export const CustomCardHeader = styled(withTheme(CardHeader))((props) => ({
  width: "100%",
  lineHeight: 1,
  "&& .MuiCardHeader-content": {
    width: "80%",
  },
}));