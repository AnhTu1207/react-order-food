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
        height: 450,
      },
    },
    avatar: {
      border: "1px solid var(--color-primary)",
    },
    media: {
      flexBasis: "50%",
      borderRadius: 8,
    },
    addBtn: {
      background: "var(--color-primary)",
      color: "#FFFF",
      fontSize: "14px",
      padding: "8px 25px",
      "&:hover": {
        background: "var(--color-button-hover)",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 18,
      },
    },
    detail: {
      flexBasis: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
      padding: "10px",
      "&& .MuiCardHeader-root": {
        padding: 0,
      },
      [theme.breakpoints.down("xs")]: {
        flexBasic: "20%",
      },
    },
    detailBtn: {
      border: "1px solid var(--color-primary)",
      color: "var(--color-primary)",
      "&:hover": {
        background: "var(--color-button-hover)",
        transition: "0.5s",
        color: "#FFFF",
      },
    },
    action: {
      flexBasis: "30%",
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
        padding: "0 16px",
      },
    },
  })
);

export const NameOfFood = styled(withTheme(Typography))((props) => ({
  fontWeight: "bold",
  fontSize: 20,
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "10em",
  [props.theme.breakpoints.down("md")]: {
    width: "7em",
    fontSize: 20,
  },
  [props.theme.breakpoints.down("sm")]: {
    width: "15em",
    fontSize: 24,
  },
}));
export const Price = styled(withTheme(Typography))((props) => ({
  fontWeight: "bolder",
  fontSize: 18,
  [props.theme.breakpoints.down("md")]: {
    fontSize: 25,
  },
  [props.theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));
export const CustomCardHeader = styled(withTheme(CardHeader))((props) => ({
  "&& .MuiCardHeader-title": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "10em",
    whiteSpace: "nowrap",
    [props.theme.breakpoints.down("md")]: {
      width: "6em",
      fontSize: "20px",
    },
    [props.theme.breakpoints.down("sm")]: {
      width: "20em",
      fontSize: "20px",
    },
    [props.theme.breakpoints.down("xs")]: {
      width: "25em",
    },
  },
}));
