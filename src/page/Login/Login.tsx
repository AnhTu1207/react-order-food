import { FC, useState } from "react";
import Helmet from "react-helmet";
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
} from "./styles";

const Login: FC = () => {
  const { i18n } = useTranslations();
  const [isLoading, setLoading] = useState(false);

  const handleOnLogin = () => {
    setLoading(true);

    // TODO: call request handle login
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>{i18n.t("login.title")}</title>
      </Helmet>
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
                <CircleLoading size={10} />
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
