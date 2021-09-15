import React, { FC } from "react";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { dialogTitleStyles } from "./styles";
import { IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

interface IProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle: FC<IProps> = ({ id, onClose, children }: IProps) => {
  const classes = dialogTitleStyles();
  return (
    <MuiDialogTitle>
      <Typography>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
