import React, { FC } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import {
  CustomCheckBox,
  CustomDivider,
  CustomListItem,
  CustomListItemIcon,
  ListItemOptionName,
  ListItemOptionTitle,
  ListItemPrice,
} from "./styles";

interface IProps {}

const ListOptions: FC<IProps> = ({}: IProps) => {
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <CustomListItem button onClick={handleClick}>
        <ListItemOptionTitle primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </CustomListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={handleToggle(value)}
              >
                <CustomListItemIcon>
                  <CustomCheckBox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </CustomListItemIcon>
                <ListItemOptionName
                  id={labelId}
                  primary={`Line itemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ${
                    value + 1
                  }`}
                />
                <ListItemSecondaryAction>
                  <ListItemPrice primary="$90.00" />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      <CustomDivider />
    </div>
  );
};
export default ListOptions;
