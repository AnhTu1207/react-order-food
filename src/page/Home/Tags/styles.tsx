import { styled } from "@material-ui/styles";
import {  Tab } from "@material-ui/core";

export const Wrapper = styled("div")({
	overflowX: "auto",
  display: "flex",
  padding: "6px 0 12px 0",
  marginBottom: 16,
  "&::-webkit-scrollbar": {
    width: "100%",
    height: 5,
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#e0e0e0",
  }
  
});

export const TapStyled = styled(Tab)({
  background: "transparent",
  color: "var(--color-primary)",
  border: "1px solid var(--color-button-hover)",
  fontSize: 14,
  marginRight: 10,
  borderRadius: 6,
});
