import { styled } from "@material-ui/styles";
import {
  Button,
  LinearProgress,
  Typography,
  Input,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from '@material-ui/lab';

export const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const LoginWrapper = styled("div")({
  width: 350,
  borderRadius: 6,
  boxShadow:
    "0px 0px 1px rgba(12, 26, 75, 0.1), 0px 20px 24px rgba(20, 37, 63, 0.06)",
  overflow: "hidden",
});

export const LoginButton = styled(Button)({
  background: "#f26722",
  color: "#FFF",
  display: "block",
  width: "100%",
  marginBottom: 14,
  "&:hover": {
    background: "var(--color-button-hover)",
  },
});

export const ProcessLine = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    background: "var(--color-primary)",
  },
});

export const InputField = styled(Input)({
  display: "block",
  width: "100%",
  marginBottom: 14,
  "& input, div": {
    display: "block",
    width: "100%",
  },
  "&:after": {
    borderBottom: "2px solid var(--color-button-hover)",
  },
  "&:before": {
    borderBottom: "none",
  },
});

export const FormWrapper = styled("div")({
  padding: "30px 20px",
  paddingBottom: "20px",
});

export const Logo = styled("img")({
  marginBottom: 16,
});

export const Subtext = styled(Typography)({
  color: "#000",
  fontSize: 14,
  textAlign: "center",
});

export const LinkSignUp = styled("span")({
  color: "var(--color-primary)",
});

export const CircleLoading = styled(CircularProgress)({
  color: "#FFF"
});

export const CustomAlert = styled(Alert)({
  width: 300,
  margin: "10px auto",
});