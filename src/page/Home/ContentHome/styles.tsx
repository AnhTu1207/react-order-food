import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core";

export const BoxStyled = styled(Box)({
  width: "100%",
  height: "100px",
  marginTop: "115px",
  backgroundColor: "#fff",
});

export const TypoStyled = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  marginLeft: "10%",
  lineHeight: "60px",
});

export const TypoDetailStyled = styled(Typography)({
  fontSize: "15px",
  marginLeft: "10%",
});

export const BoxImgStyled = styled(Box)({
  paddingTop: "20px",
  width: "100%",
  backgroundColor: "#fff",
});

export const BoxImgDetailStyled = styled(Box)({
  paddingTop: "20px",
  width: "100%",
  backgroundColor: "red",
});
