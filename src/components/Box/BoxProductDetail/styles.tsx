import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Button, Typography } from "@material-ui/core";
import { Box, styled } from "@mui/system";

import StarIcon from "@mui/icons-material/Star";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      height: 150,
      // background: "none",
      border: "1px solid #808080",
      borderRadius: 8,
      padding: 5,
    },
    addBtnCart: {
      background: "var(--color-primary)",
      color: "#FFFF",
      fontSize: "14px",
      padding: "6px 25px",
      "&:hover": {
        background: "var(--color-button-hover)",
      },
    },
  })
);

export const CustomProductDetail = styled(Box)({
  width: "100%",
  padding: "20px",
});

export const CustomProductDetailLeft = styled(Box)({
  width: "30%",
  // height: "10vh",
  float: "left",
  // marginLeft: "2%",
});

export const CustomProductDetailRight = styled(Box)({
  width: "35%",
  // height: "10vh",
  // backgroundColor: "pink",
  marginLeft: "50%",
  textAlign: "center",
});

export const TitleProductDetail = styled(Typography)({
  fontsize: "30px",
  fontWeight: 700,
});

export const AddressProductDetail = styled(Typography)({
  fontsize: "30px",
  fontWeight: 700,
  paddingTop: "10px",
});

export const PriceProductDetail = styled(Typography)({
  fontsize: "30px",
  fontWeight: 700,
  paddingTop: "10px",
  color: "red",
});

export const Line = styled(Box)({
  width: "100%",
  marginTop: "30px",
  height: "1.5px",
  backgroundColor: "#f4f4f4",
});

export const Description = styled(Typography)({
  fontsize: "30px",
  fontWeight: 700,
  paddingTop: "20px",
});

export const StartIcon = styled(StarIcon)({
  color: "var(--color-primary)",
  marginTop: "10px",
});

export const Time = styled(Typography)({
  color: "gray",
});

export const AddCart = styled(Button)({
  // color: "gray",
  background: "var(--color-primary)",
});
