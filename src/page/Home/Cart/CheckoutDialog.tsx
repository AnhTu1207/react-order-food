import { useForm } from "react-hook-form";
import { DialogActions, DialogContent } from "@material-ui/core";

import { useTranslations } from "hooks";

import { UserInfo } from "models/types";
import {
  CustomDialog,
  CustomDialogContentText,
  CustomDialogTitle,
  DialogButton,
  ErrorText,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
    },
  });

  const onSubmit = (data: UserInfo) => {
    console.log(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                margin="dense"
                id="fullName"
                type="string"
                fullWidth
                variant="standard"
                label={i18n.t(
                  "home_page.address_confirm_dialog.label.full_name"
                )}
                {...register("fullName", {
                  minLength: 3,
                  required: true,
                })}
              />
              {errors.fullName && (
                <ErrorText color="error">
                  {i18n.t("home_page.address_confirm_dialog.errors.full_name")}
                </ErrorText>
              )}
              <InputField
                margin="dense"
                id="phoneNumber"
                label={i18n.t(
                  "home_page.address_confirm_dialog.label.phone_number"
                )}
                type="string"
                fullWidth
                variant="standard"
                {...register("phoneNumber", {
                  required: true,
                  pattern:
                    /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                })}
              />
              {errors.phoneNumber && (
                <ErrorText color="error">
                  {i18n.t(
                    "home_page.address_confirm_dialog.errors.phone_number"
                  )}
                </ErrorText>
              )}
              <InputField
                margin="dense"
                id="address"
                label={i18n.t("home_page.address_confirm_dialog.label.address")}
                type="string"
                fullWidth
                variant="standard"
                {...register("address", {
                  required: true,
                  minLength: 20,
                })}
              />
              {errors.address && (
                <ErrorText color="error">
                  {i18n.t("home_page.address_confirm_dialog.errors.address")}
                </ErrorText>
              )}
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={onClose}>
            {i18n.t("home_page.address_confirm_dialog.button.cancel")}
          </DialogButton>
          <DialogButton onClick={handleSubmit(onSubmit)}>
            {i18n.t("home_page.address_confirm_dialog.button.confirm")}
          </DialogButton>
        </DialogActions>
      </CustomDialog>
    </>
  );
}

export default CheckoutDialog;
