import { FC, useState } from "react";
import Helmet from "react-helmet";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { useTranslations } from "hooks";
import { changePassValidationSchema } from "schemas";
import { Logo, MainPageTemplate } from "components";
import {
  Wrapper,
  LoginWrapper,
  LoginButton,
  ProcessLine,
  InputField,
  FormWrapper,
  CircleLoading,
  CustomAlert,
  ButtonWrapper,
} from "./styles";

const ChangePassword: FC = () => {
  const { i18n } = useTranslations();
  const [isErr, setErr] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: changePassValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>{i18n.t("change_pass_page.title")}</title>
      </Helmet>
      <MainPageTemplate>
        <Snackbar
          open={isErr}
          autoHideDuration={3000}
          onClose={() => setErr(false)}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <CustomAlert severity="error">
            {i18n.t("change_pass_page.message_error")}
          </CustomAlert>
        </Snackbar>
        <Wrapper>
          <Logo margin="0 0 16px 0" />
          <LoginWrapper>
            {/* {isLoadingLogin && <ProcessLine />} */}
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <FormWrapper>
                <InputField
                  placeholder={i18n.t(
                    "change_pass_page.old_password_input_placeholder"
                  )}
                  onChange={formik.handleChange}
                  name="oldPassword"
                  error={
                    formik.touched.oldPassword && !!formik.errors.oldPassword
                  }
                  helperText={
                    formik.touched.oldPassword && formik.errors.oldPassword
                  }
                  value={formik.values.oldPassword}
                />
                <InputField
                  placeholder={i18n.t(
                    "change_pass_page.new_password_input_placeholder"
                  )}
                  type="password"
                  name="newPassword"
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                  error={
                    formik.touched.newPassword && !!formik.errors.newPassword
                  }
                  helperText={
                    formik.touched.newPassword && formik.errors.newPassword
                  }
                />
                <ButtonWrapper>
                  {/* {isLoadingLogin ? (
                    <CircleLoading size={25} />
                  ) : ( */}
                  <LoginButton type="submit">
                    {i18n.t("change_pass_page.button_title")}
                  </LoginButton>
                  {/* )} */}
                </ButtonWrapper>
              </FormWrapper>
            </form>
          </LoginWrapper>
        </Wrapper>
      </MainPageTemplate>
    </>
  );
};

export default ChangePassword;
