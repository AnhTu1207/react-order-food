import { styled } from "@material-ui/styles";
import {  Chip } from "@material-ui/core";

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

export const ChipStyled = styled(Chip)({
  background: "transparent",
  color: "var(--color-primary)",
  border: "1px solid var(--color-button-hover)",
  padding: 2,
  fontSize: 14,
  marginRight: 10,
  borderRadius: 6,
  "&:hover": {
    background: "var(--color-primary)",
    color: "#FFF",
  },
  "&:focus": {
    backgroundColor: "var(--color-primary)",
    color: "#FFF",
  },
});
