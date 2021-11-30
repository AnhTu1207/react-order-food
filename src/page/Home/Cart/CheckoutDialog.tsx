import { useFormik } from "formik";
import { DialogActions, DialogContent } from "@material-ui/core";

import { useTranslations } from "hooks";
import { addressConfirmValidationSchema } from "schemas";

import {
  CustomDialog,
  CustomDialogContentText,
  CustomDialogTitle,
  DialogButton,
  InputField,
} from "./styles";

import { UserInfoData } from "assets";

interface IProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function CheckoutDialog({ open, onOpen, onClose }: IProps) {
  const { i18n } = useTranslations();
  const { fullName, address, phoneNumber } = UserInfoData;

  const formik = useFormik({
    initialValues: {
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
    },
    validationSchema: addressConfirmValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <CustomDialog open={open}>
        <CustomDialogTitle>
          {i18n.t("home_page.address_confirm_dialog.title")}
        </CustomDialogTitle>
        <DialogContent>
          <CustomDialogContentText>
            {i18n.t("home_page.address_confirm_dialog.description")}
          </CustomDialogContentText>
          {UserInfoData && (
            <form onSubmit={formik.handleSubmit} id="address-confirm">
              <InputField
                margin="dense"
                id="fullName"
                type="string"
                fullWidth
                variant="standard"
                label={i18n.t(
                  "home_page.address_confirm_dialog.label.full_name"
                )}
                onChange={formik.handleChange}
                error={formik.touched.fullName && !!formik.errors.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
                value={formik.values.fullName}
              />
              <InputField
                margin="dense"
                id="phoneNumber"
                label={i18n.t(
                  "home_page.address_confirm_dialog.label.phone_number"
                )}
                type="string"
                fullWidth
                variant="standard"
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber && !!formik.errors.phoneNumber
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                value={formik.values.phoneNumber}
              />
              <InputField
                margin="dense"
                id="address"
                label={i18n.t("home_page.address_confirm_dialog.label.address")}
                type="string"
                fullWidth
                variant="standard"
                onChange={formik.handleChange}
                error={formik.touched.address && !!formik.errors.address}
                helperText={formik.touched.address && formik.errors.address}
                value={formik.values.address}
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={onClose}>
            {i18n.t("home_page.address_confirm_dialog.button.cancel")}
          </DialogButton>
          <DialogButton form="address-confirm" type="submit">
            {i18n.t("home_page.address_confirm_dialog.button.confirm")}
          </DialogButton>
        </DialogActions>
      </CustomDialog>
    </>
  );
}

export default CheckoutDialog;
