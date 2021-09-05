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
      width: 150,
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
      width: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
      padding: "10px",
      "&& .MuiCardHeader-root": {
        padding: 0,
      },
      [theme.breakpoints.down("lg")]: {
        width: 300,
      },
      [theme.breakpoints.down("md")]: {
        width: 220,
      },
      [theme.breakpoints.down("sm")]: {
        width: 380,
      },
      [theme.breakpoints.down("xs")]: {
        width: "80vw",
      },
    },
    detailBtn: {
      border: "1px solid var(--color-primary)",
      color: "var(--color-primary)",
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
      flexBasis: "20%",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        flexBasic: "20%",
      },
      [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexBasic: "20%",
        padding: "0 5px",
      },
    },
  })
);

export const NameOfFood = styled(withTheme(Typography))((props) => ({
  fontWeight: "bold",
  fontSize: 20,
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  [props.theme.breakpoints.down("lg")]: {
    fontSize: 20,
  },
  [props.theme.breakpoints.down("md")]: {
    fontSize: 22,
  },
  [props.theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));
export const Price = styled(withTheme(Typography))((props) => ({
  fontWeight: "bolder",
  fontSize: 16,
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
}));

export const CustomCardHeader = styled(withTheme(CardHeader))((props) => ({
  width: "100%",
  "&& .MuiCardHeader-title": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: 15,
    [props.theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [props.theme.breakpoints.down("md")]: {
      width: "15em",
    },
    [props.theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [props.theme.breakpoints.down("xs")]: {
      width: "13em",
    },
  },
}));
