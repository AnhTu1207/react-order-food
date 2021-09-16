import {
  createStyles,
  Theme,
  makeStyles,
  styled,
  withStyles,
} from "@material-ui/core/styles";
import {
  CardHeader,
  Typography,
  withTheme,
  Dialog,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  CheckboxProps,
} from "@material-ui/core";

import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

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

export const dialogTitleStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: "#FFF",
      "&:hover": {
        background: "#FFF",
        color: "var(--color-primary)",
        transition: "0.5s",
      },
    },
    dialogTitle: {
      textAlign: "center",
      color: "#FFF",
    },
  })
);

export const dialogOptionStyles = makeStyles((theme: Theme) =>
  createStyles({
    openBtn: {
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
    dialogImg: {
      width: "100%",
    },
    avatar: {
      border: "1px solid var(--color-primary)",
      width: 40,
      height: 40,
    },
    restaurant: {
      padding: "10px 0",
    },
    addBtn: {
      backgroundColor: "var(--color-primary)",
      maxWidth: "50%",
      color: "#FFF",
      padding: "8px 16px",
      "&:hover": {
        backgroundColor: "var(--color-button-hover)",
        transition: "0.5s",
      },
    },
    quantity: {
      width: 40,
      padding: 6,
      borderRadius: 5,
      border: "1px solid",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        width: 30,
      },
    },
    increaseBtn: {
      border: "1px solid var(--color-primary)",
      padding: 10,
      "&:hover": {
        backgroundColor: "var(--color-button-hover)",
        transition: "0.5s",
      },
      [theme.breakpoints.down("xs")]: {
        padding: 7,
      },
    },
    increaseIcon: {
      color: "var(--color-primary)",
      fontSize: 15,
      boxSizing: "border-box",
      "&:hover": {
        color: "#FFF",
        transition: "0.5s",
      },
    },
    decreaseIcon: {
      color: "#FFF",
      fontSize: 15,
      "&:hover": {
        color: "var(--color-button-hover)",
        transition: "0.5s",
      },
    },
    decreaseBtn: {
      padding: 10,
      backgroundColor: "#c0c0c0",
      "&:hover": {
        transition: "0.5s",
      },
      [theme.breakpoints.down("xs")]: {
        padding: 7,
      },
    },
    boxQuantity: {
      width: "30%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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

export const RestaurantName = styled(withTheme(Typography))((props) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: 15,
  width: "80%",
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

export const DialogContent = styled(withTheme(MuiDialogContent))((props) => ({
  root: {
    padding: props.theme.spacing(2),
  },
}));

export const DialogActions = styled(withTheme(MuiDialogActions))((props) => ({
  margin: 0,
  padding: props.theme.spacing(1),
  justifyContent: "space-around",
}));

export const TypographyBold = styled(Typography)({
  fontWeight: 500,
  fontSize: 18,
});

export const CustomMuiDialogTitle = styled(MuiDialogTitle)({
  backgroundColor: "var(--color-primary)",
});

export const CustomDialog = styled(Dialog)({
  "& .MuiDialog-paperWidthSm": {
    maxWidth: 450,
    minHeight: "80vh",
  },
});

export const CustomDivider = styled(Divider)({
  width: "100%",
  margin: "10px 0",
});

export const CustomListItem = styled(ListItem)({
  padding: 0,
});

export const CustomListItemIcon = styled(ListItemIcon)({
  minWidth: 0,
});

export const ListItemOptionName = styled(ListItemText)({
  "&& .MuiTypography-displayBlock": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "90%",
  },
});

export const ListItemPrice = styled(ListItemText)({
  color: "var(--color-primary)",
  "&& .MuiTypography-displayBlock": {
    fontWeight: 500,
    textAlign: "right",
  },
});

export const ListItemOptionTitle = styled(ListItemText)({
  "&& .MuiTypography-displayBlock": {
    fontWeight: 500,
  },
});

export const CustomCheckBox = withStyles({
  root: {
    "&$checked": {
      color: "var(--color-primary)",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
