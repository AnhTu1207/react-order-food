import { Box, Typography } from "@material-ui/core";
import {
  createStyles,
  Theme,
  makeStyles,
  styled,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orderStatus: {
      fontWeight: 600,
      padding: 10,
      fontSize: 18,
    },
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #d8d8d8",
      height: 200,
      marginBottom: 10,
    },
    storeAvatar: {
      width: "40%",
    },
    restaurantName: {
      fontSize: 23,
      fontWeight: "bold",
      padding: "0 0 10px 10px",
    },
    boxMap: {
      width: "100%",
      height: "100%",
    },
    restaurantBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  })
);

export const CardHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #d8d8d8",
});

export const BoxInfoStore = styled(Box)({
  width: "50%",
  display: "flex",
  justifyContent: "space-betweens",
  height: "100%",
});

export const BoxGoogleMap = styled(Box)({
  display: "flex",
  justifyContent: "space-betweens",
  alignItems: "flex-start",
  width: "35%",
  height: "100%",
});

export const InfoText = styled(Typography)({
  fontSize: 15,
  paddingLeft: 5,
});

export const Info = styled(Typography)({
  display: "flex",
  alignItems: "center",
  padding: "5px 5px 5px 10px",
});
