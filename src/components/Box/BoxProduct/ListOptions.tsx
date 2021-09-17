import React, { FC } from "react";
import currency from "currency.js";
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
import { IOption } from "models/types";

interface IProps {
  option: IOption;
}

const ListOptions: FC<IProps> = ({ option }: IProps) => {
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
        <ListItemOptionTitle primary={option.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </CustomListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {option.list.map((list, index) => (
            <ListItem
              key={list.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <CustomListItemIcon>
                <CustomCheckBox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  value={list.name}
                />
              </CustomListItemIcon>

              <ListItemOptionName primary={list.name} />

              <ListItemSecondaryAction>
                <ListItemPrice primary={`${currency(list.price).format()}`} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <CustomDivider />
    </div>
  );
};
export default ListOptions;
