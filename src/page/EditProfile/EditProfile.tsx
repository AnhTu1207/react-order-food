import { FC, useState } from "react";
import Helmet from "react-helmet";
import Snackbar from "@material-ui/core/Snackbar";
import { useFormik } from "formik";

import { useTranslations } from "hooks";
import { editProfileValidationSchema } from "schemas";
import { MainPageTemplate } from "components";
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

const EditProfile: FC = () => {
  const { i18n } = useTranslations();
  const [isErr, setErr] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>{i18n.t("edit_profile_page.title")}</title>
      </Helmet>
      <MainPageTemplate>
        <Snackbar
          open={isErr}
          autoHideDuration={3000}
          onClose={() => setErr(false)}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <CustomAlert severity="error">
            {i18n.t("edit_profile_page.message_error")}
          </CustomAlert>
        </Snackbar>
        <Wrapper>
          <LoginWrapper>
            {/* {isLoadingLogin && <ProcessLine />} */}
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <FormWrapper>
                <InputField
                  placeholder={i18n.t(
                    "edit_profile_page.email_input_placeholder"
                  )}
                  onChange={formik.handleChange}
                  name="email"
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  value={formik.values.email}
                />
                <InputField
                  placeholder={i18n.t(
                    "edit_profile_page.name_input_placeholder"
                  )}
                  onChange={formik.handleChange}
                  name="name"
                  error={formik.touched.name && !!formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                  value={formik.values.name}
                />
                <InputField
                  placeholder={i18n.t(
                    "edit_profile_page.phone_input_placeholder"
                  )}
                  onChange={formik.handleChange}
                  name="phone"
                  error={formik.touched.phone && !!formik.errors.phone}
                  helperText={formik.touched.phone && formik.errors.phone}
                  value={formik.values.phone}
                />
                <InputField
                  placeholder={i18n.t(
                    "edit_profile_page.address_input_placeholder"
                  )}
                  onChange={formik.handleChange}
                  name="address"
                  error={formik.touched.address && !!formik.errors.address}
                  helperText={formik.touched.address && formik.errors.address}
                  value={formik.values.address}
                />
                <ButtonWrapper>
                  {/* {isLoadingLogin ? (
                <CircleLoading size={25} />
              ) : ( */}
                  <LoginButton type="submit">
                    {i18n.t("edit_profile_page.button_title")}
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

export default EditProfile;
