import { FC } from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import { useTranslations } from "hooks";

const RedirectButton = styled(Button)({
  background: "#f26722",
  color: "#FFF",
  fontSize: 18,
  padding: "8px 16px",
  display: "block",
  position: "absolute",
  right: "10%",
  bottom: "10%",
  "&:hover": {
    background: "var(--color-button-hover)",
  },
});

const Container = styled("div")({
  height: "100vh",
  width: "100%",
  backgroundImage: 'url("/Verify.png")',
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  backgroundPositionY: "30%",
  position: "relative",
});

const Verify: FC = () => {
  const history = useHistory();
  const { i18n } = useTranslations();

  return (
    <>
      <Helmet>
        <title>{i18n.t("verify_page.title")}</title>
      </Helmet>
      <Container>
        <RedirectButton onClick={() => history.replace("/login")}>
          Redirect
        </RedirectButton>
      </Container>
    </>
  );
};

export default Verify;
