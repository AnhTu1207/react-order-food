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
      [theme.breakpoints.down("md")]: {
        flexBasic: "40%",
      },
      [theme.breakpoints.down("sm")]: {
        flexBasic: "40%",
      },
      [theme.breakpoints.down("xs")]: {
        flexBasic: "50%",
      },
    },
    addBtn: {
      background: "var(--color-primary)",
      color: "white",
      padding: "0.4rem 2rem",
      "&:hover": {
        background: "var(--color-button-hover)",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1em",
      },
    },
    detail: {
      flexBasis: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
      padding: "1em",
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
        color: "white",
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
        padding: "0 1rem",
      },
    },
  })
);

export const NameOfFood = styled(withTheme(Typography))((props) => ({
  fontWeight: "bold",
  fontSize: "1.4em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "10em",
  [props.theme.breakpoints.down("md")]: {
    width: "7em",
    fontSize: "1.5em",
  },
  [props.theme.breakpoints.down("sm")]: {
    width: "15em",
    fontSize: "1.5em",
  },
  [props.theme.breakpoints.down("xs")]: {
    textOverflow: "ellipsis",
    overflow: "inherit",
    fontSize: "1.5em",
  },
}));
export const Price = styled(withTheme(Typography))((props) => ({
  fontWeight: "bolder",
  fontSize: "1.2em",
  [props.theme.breakpoints.down("md")]: {
    fontSize: "1.3em",
  },
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "1.2em",
  },
  [props.theme.breakpoints.down("xs")]: {
    fontSize: "1.2em",
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
      fontSize: "1.3em",
    },
    [props.theme.breakpoints.down("sm")]: {
      width: "12em",
      fontSize: "1.3em",
    },
    [props.theme.breakpoints.down("xs")]: {
      textOverflow: "ellipsis",
      overflow: "inherit",
    },
  },
}));
