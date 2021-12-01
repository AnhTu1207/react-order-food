import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { useHistory } from "react-router-dom";

import { useTranslations } from "hooks";
import { Logo } from "components";

import {
  useStyles,
  CustomToolbar,
  CustomSearchIcon,
  CustomAccountIcon,
  CustomAppbar,
} from "./styles";

interface IProps {
  onClickMenu: () => void;
}
const Header: FC<IProps> = ({ onClickMenu }: IProps) => {
  const classes = useStyles();
  const { i18n } = useTranslations();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <CustomAppbar position="sticky">
        <CustomToolbar>
          <div className={classes.logo} onClick={() => history.push("/")}>
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
          <IconButton onClick={() => history.push("/profile")}>
            <CustomAccountIcon />
          </IconButton>
        </CustomToolbar>
      </CustomAppbar>
    </div>
  );
};

export default Header;
