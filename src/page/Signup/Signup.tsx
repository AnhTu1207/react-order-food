import { FC, useState } from "react";
import Helmet from "react-helmet";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { useTranslations } from "hooks";
import { useLogin } from "api/auth";
import { signupValidationSchema } from "schemas";
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

const Signup: FC = () => {
  const { i18n } = useTranslations();
  const [isErr, setErr] = useState(false);
  const history = useHistory();

  const { runRequest: sendLoginRequest, isLoading: isLoadingLogin } = useLogin({
    successCallback: (data) => {
      sessionStorage.setItem("user_token", data.data.accessToken);
      sessionStorage.setItem("user_id", data.data.id);
      history.replace("/");
    },
    failureCallback: () => {
      setErr(true);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Helmet>
        <title>{i18n.t("signup.title")}</title>
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
          {isLoadingLogin && <ProcessLine />}
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormWrapper>
              <InputField
                placeholder={i18n.t("signup.name_input_placeholder")}
                disabled={isLoadingLogin}
                onChange={formik.handleChange}
                name="name"
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                value={formik.values.name}
              />
              <InputField
                placeholder={i18n.t("signup.email_input_placeholder")}
                disabled={isLoadingLogin}
                onChange={formik.handleChange}
                name="email"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                value={formik.values.email}
              />
              <InputField
                placeholder={i18n.t("signup.phone_input_placeholder")}
                disabled={isLoadingLogin}
                onChange={formik.handleChange}
                name="phone"
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                value={formik.values.phone}
              />
              <InputField
                placeholder={i18n.t("signup.address_input_placeholder")}
                disabled={isLoadingLogin}
                onChange={formik.handleChange}
                name="address"
                error={formik.touched.address && !!formik.errors.address}
                helperText={formik.touched.address && formik.errors.address}
                value={formik.values.address}
              />
              <InputField
                placeholder={i18n.t("signup.user_name_input_placeholder")}
                disabled={isLoadingLogin}
                onChange={formik.handleChange}
                name="username"
                error={formik.touched.username && !!formik.errors.username}
                helperText={formik.touched.username && formik.errors.username}
                value={formik.values.username}
              />
              <InputField
                placeholder={i18n.t("signup.password_input_placeholder")}
                disabled={isLoadingLogin}
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
              <ButtonWrapper>
                {isLoadingLogin ? (
                  <CircleLoading size={25} />
                ) : (
                  <LoginButton type="submit">
                    {i18n.t("signup.button_title")}
                  </LoginButton>
                )}
              </ButtonWrapper>
              <Subtext>
                {i18n.t("signup.sub_text")}{" "}
                <LinkSignUp onClick={() => history.replace("/login")}>
                  {i18n.t("signup.login_link")}
                </LinkSignUp>
              </Subtext>
            </FormWrapper>
          </form>
        </LoginWrapper>
      </Wrapper>
    </>
  );
};

export default Signup;
