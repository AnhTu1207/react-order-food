import { FC, useState } from "react";
import {
  IconButton,
  InputBase,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  EditOutlined,
  HistoryOutlined,
  EventNoteOutlined,
  ExitToAppOutlined,
  VpnKeyOutlined,
} from "@material-ui/icons";
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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

          <IconButton onClick={handleClick}>
            <CustomAccountIcon />
          </IconButton>

          {/* Popover */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <List>
              <ListItem button onClick={() => history.push("/order")}>
                <ListItemIcon>
                  <EventNoteOutlined className={classes.icons} />
                </ListItemIcon>
                <ListItemText
                  primary={i18n.t("main_page_template.current_order")}
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <HistoryOutlined className={classes.icons} />
                </ListItemIcon>
                <ListItemText
                  primary={i18n.t("main_page_template.order_history")}
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <EditOutlined className={classes.icons} />
                </ListItemIcon>
                <ListItemText
                  primary={i18n.t("main_page_template.edit_profile")}
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <VpnKeyOutlined className={classes.icons} />
                </ListItemIcon>
                <ListItemText
                  primary={i18n.t("main_page_template.change_password")}
                />
              </ListItem>

              <ListItem
                button
                onClick={() => {
                  sessionStorage.clear();
                  history.push("/login");
                }}
              >
                <ListItemIcon>
                  <ExitToAppOutlined className={classes.icons} />
                </ListItemIcon>
                <ListItemText primary={i18n.t("main_page_template.logout")} />
              </ListItem>
            </List>
          </Popover>
        </CustomToolbar>
      </CustomAppbar>
    </div>
  );
};

export default Header;
