import { FC, MouseEvent, useRef, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import { useTranslations } from "hooks";
import { Logo } from "components";

import {
  useStyles,
  CustomToolbar,
  CustomMenuIcon,
  CustomSearchIcon,
  CustomAccountIcon,
  CustomPopover,
  CustomTypoPopover,
  CustomAppbar,
} from "./styles";

interface IProps {
  onClickMenu: () => void;
}
const Header: FC<IProps> = ({ onClickMenu }: IProps) => {
  const classes = useStyles();
  const { i18n } = useTranslations();
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(buttonRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <CustomAppbar position="sticky">
        <CustomToolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClickMenu}
          >
            <CustomMenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Logo margin="4px 0 0 0" />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <CustomSearchIcon />
            </div>
            <InputBase
              placeholder={i18n.t(
                "main_page_template.input_search_placeholder"
              )}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton innerRef={buttonRef} onClick={handleClick}>
            <CustomAccountIcon />
          </IconButton>
          <CustomPopover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <CustomTypoPopover>
              {i18n.t("logout.popover_title")}
            </CustomTypoPopover>
          </CustomPopover>
        </CustomToolbar>
      </CustomAppbar>
    </div>
  );
};

export default Header;
