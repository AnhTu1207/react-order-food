import { FC, useState } from "react";
import Helmet from "react-helmet";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import { useTranslations } from "hooks";

import { Logo } from "components";
import {
  Wrapper,
  LoginWrapper,
  LoginButton,
  ProcessLine,
  InputField,
  FormWrapper,
  Subtext,
  LinkSignUp,
  CircleLoading,
  CustomAlert,
  ButtonWrapper,
} from "./styles";

const Login: FC = () => {
	const { i18n } = useTranslations();
  const [isLoading, setLoading] = useState(false);
  const [isErr, setErr] = useState(false);

  const history = useHistory();

  const handleOnLogin = () => {
    setLoading(true);

    // TODO: call request handle login
    setTimeout(() => {
      setLoading(false);
      setErr(true);
      sessionStorage.setItem("access_token", "token");
      history.replace("/");
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>{i18n.t("login.title")}</title>
      </Helmet>
      <Snackbar
        open={isErr}
        autoHideDuration={3000}
        onClose={() => setErr(false)}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <CustomAlert severity="error">
          {i18n.t("login.message_error")}
        </CustomAlert>
      </Snackbar>
      <Wrapper>
        <Logo margin="0 0 16px 0" />
        <LoginWrapper>
          {isLoading && <ProcessLine />}
          <form autoComplete="off">
            <FormWrapper>
              <InputField
                placeholder={i18n.t("login.email_input_placeholder")}
                disabled={isLoading}
              />
              <InputField
                placeholder={i18n.t("login.password_input_placeholder")}
                disabled={isLoading}
                type="password"
              />
              <ButtonWrapper>
                {isLoading ? (
                  <CircleLoading size={25} />
                ) : (
                  <LoginButton onClick={handleOnLogin}>
                    {i18n.t("login.button_title")}
                  </LoginButton>
                )}
              </ButtonWrapper>
              <Subtext>
                {i18n.t("login.sub_text")}{" "}
                <LinkSignUp>{i18n.t("login.sign_up_link")}</LinkSignUp>
              </Subtext>
            </FormWrapper>
          </form>
        </LoginWrapper>
      </Wrapper>
    </>
  );
};

export default Login;
