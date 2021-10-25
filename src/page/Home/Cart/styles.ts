import {
  Badge,
  Button,
  createStyles,
  Divider,
  makeStyles,
  styled,
  Theme,
} from "@material-ui/core";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    cartButton: {
      background: "var(--color-primary)",
      position: "fixed",
      bottom: "5%",
      right: "3%",
      "&:hover": {
        background: "var(--color-button-hover)",
        transition: "0.5s",
      },
    },
    cartIcon: {
      color: "#FFF",
    },
  })
);

export const CustomCartIcon = styled(ShoppingBasket)({
  color: "var(--color-primary)",
  fontSize: 50,
  margin: "16px 0 23px 0",
});

export const CustomBadge = styled(Badge)({
  "&& .MuiBadge-colorPrimary": {
    backgroundColor: "#FFF",
  },
});

export const CustomDivider = styled(Divider)({
  width: "100%",
});

export const DrawerContentWrapper = styled("div")((props) => ({
  width: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [props.theme.breakpoints.down("xs")]: {
    width: 250,
  },
}));

export const CheckoutButton = styled(Button)({
  backgroundColor: "var(--color-primary)",
  color: "#fff",
  marginTop: 20,
  "&:hover": {
    backgroundColor: "var(--color-button-hover)",
    transition: "0.5s",
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));