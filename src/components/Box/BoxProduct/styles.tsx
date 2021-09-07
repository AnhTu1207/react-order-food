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
        height: 420,
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
        width: "100%",
        height: 330,
      },
    },
    addBtn: {
      background: "var(--color-primary)",
      color: "#FFFF",
      fontSize: "14px",
      padding: "5px 25px",
      marginTop: 10,
      "&:hover": {
        background: "var(--color-button-hover)",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
        padding: "5px 30px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
        padding: "4px 25px",
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
      [theme.breakpoints.down("xs")]: {
        width: "80vw",
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
      [theme.breakpoints.down("md")]: {
        padding: 10,
      },
    },
    action: {
      flex: "1 1 20%",
      width: "20%",
      display: "block",
      margin: "auto",
      textAlign: "center",
    },
  })
);

export const NameOfFood = styled(withTheme(Typography))((props) => ({
  fontWeight: "bold",
  fontSize: 20,
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: 1,
  width: "100%",
  [props.theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const Price = styled(withTheme(Typography))((props) => ({
  fontWeight: "bolder",
  fontSize: 16,
  lineHeight: 2,
  [props.theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
  [props.theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const FoodDetail = styled(withTheme(Typography))((props) => ({
  fontWeight: "lighter",
  fontSize: 15,
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  lineHeight: 2,
}));

export const RestaurantName = styled(withTheme(Typography))((props) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: 15,
  [props.theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const CustomCardHeader = styled(withTheme(CardHeader))((props) => ({
  width: "100%",
  lineHeight: 1,
  display: "inline-block",
  // "&& .MuiCardHeader-title": {

  //   lineHeight: "25px",
  //   [props.theme.breakpoints.down("lg")]: {
  //     width: "100%",
  //   },
  //   [props.theme.breakpoints.down("md")]: {
  //     width: "15em",
  //   },
  //   [props.theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  //   [props.theme.breakpoints.down("xs")]: {
  //     width: "13em",
  //   },
  // },
}));
