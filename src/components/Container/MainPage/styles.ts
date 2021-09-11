import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
  styled,
} from "@material-ui/core/styles";
import {
  Toolbar,
  MenuItem,
  Divider,
  AppBar,
  withTheme,
  Paper,
  Popover,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
      marginRight: 16,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "#000",
      border: "1px solid #f4f4f4",
      borderRadius: 4,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

export const CustomToolbar = styled(withTheme(Toolbar))((props) => ({
  background: "#FFF",
  width: "85%",
  margin: "0 auto",
  [props.theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

export const Wrapper = styled("div")({
  background: "#f4f4f4",
  minHeight: "100vh",
});

export const CustomMenuIcon = styled(MenuIcon)({
  color: "var(--color-primary)",
});

export const CustomSearchIcon = styled(SearchIcon)({
  color: "var(--color-primary)",
});

export const CustomAccountIcon = styled(AccountCircle)({
  color: "var(--color-primary)",
  marginTop: 2,
});

export const CustomPopover = styled(Popover)({
  color: "var(--color-primary)",
  width: "100%",
});

export const CustomTypoPopover = styled(Typography)({
  color: "var(--color-primary)",
  padding: "10px",
});

export const DrawerContentWrapper = styled("div")({
  width: 250,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

interface IDrawerListItemProps {
  active?: boolean;
}

export const DrawerListItem = styled(MenuItem)(
  ({ active }: IDrawerListItemProps) => ({
    color: active ? "var(--color-primary)" : "#000",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 4,
    width: "100%",
    padding: "15px 0",
    "&:hover": {
      color: "#FFF",
      background: "var(--color-button-hover)",
    },
  })
);

export const CustomDivider = styled(Divider)({
  width: "100%",
});

export const Content = styled(withTheme(Paper))((props) => ({
  width: "85%",
  margin: "0 auto",
  minHeight: "100vh",
  padding: "25px 16px 0 16px",
  background: "#f4f4f4",
  [props.theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

export const CustomAppbar = styled(AppBar)({
  background: "#FFF",
});
