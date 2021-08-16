import { FC, useState } from "react";
import Helmet from "react-helmet";
import Snackbar from "@material-ui/core/Snackbar";
import { useTranslations } from "hooks";

import {
  Wrapper,
  LoginWrapper,
  LoginButton,
  ProcessLine,
  InputField,
  FormWrapper,
  Logo,
  Subtext,
  LinkSignUp,
  CircleLoading,
  CustomAlert,
} from "./styles";

const Login: FC = () => {
  const { i18n } = useTranslations();
  const [isLoading, setLoading] = useState(false);
  const [isErr, setErr] = useState(false);

  const handleOnLogin = () => {
    setLoading(true);

    // TODO: call request handle login
    setTimeout(() => {
      setLoading(false);
      setErr(true);
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
        <Logo src="./logo.svg" />
        <LoginWrapper>
          {isLoading && <ProcessLine />}
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
            <LoginButton onClick={handleOnLogin} disabled={isLoading}>
              {isLoading ? (
                <CircleLoading size={15} />
              ) : (
                i18n.t("login.button_title")
              )}
            </LoginButton>
            <Subtext>
              {i18n.t("login.sub_text")}{" "}
              <LinkSignUp>{i18n.t("login.sign_up_link")}</LinkSignUp>
            </Subtext>
          </FormWrapper>
        </LoginWrapper>
      </Wrapper>
    </>
  );
};

export default Login;
