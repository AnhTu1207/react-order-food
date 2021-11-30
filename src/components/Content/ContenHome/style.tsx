import { Box, styled, Typography, withTheme } from "@material-ui/core";

export const BoxContent = styled(Box)({
  width: "90%",
  marginTop: "60px",
  marginLeft: "5%",
  backgroundColor: "#fff",
  boxShadow: " 0px 3px 8px rgba(0, 0, 0, 0.24)",
});

export const Decriptions = styled(Typography)({
  fontSize: "22px",
  width: "90%",
  fontWeight: "bold",
  padding: "15px",
  marginLeft: "5%",
  letterSpacing: "1px",
});

export const DecriptionsDetaial = styled(Typography)({
  fontSize: "15px",
  width: "90%",
  marginLeft: "5%",
});
