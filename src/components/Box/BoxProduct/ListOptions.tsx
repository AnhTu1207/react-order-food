import React, { FC, useEffect, useState } from "react";
import currency from "currency.js";
import _ from "lodash";
import {
  Collapse,
  FormControlLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  RadioGroup,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { IFoodOption } from "models/types";
import {
  CustomCheckBox,
  CustomDivider,
  CustomFormControl,
  CustomListItem,
  CustomListItemIcon,
  CustomRadio,
  ListItemOptionTitle,
  ListItemPrice,
} from "./styles";
import { parseInt } from "lodash";

interface IProps {
  option: IFoodOption;
  optionReturn: any;
}

interface IList {
  id: number;
  name: string;
  price: number;
}

const ListOptions: FC<IProps> = ({ option, optionReturn }: IProps) => {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [checkboxState, setCheckboxState] = useState<any>(false);
  const [optionState, setOptionState] = useState<Array<IList>>();

  useEffect(() => {
    if (option.type === "checkbox") {
      option.list.map((list, index) => {
        setCheckboxState((preState: any) => ({
          ...preState,
          [index]: false,
        }));
      });
    }
  }, []);

  useEffect(() => {
    if (option.type === "checkbox") {
      option.list.forEach((item, index) => {
        if (checkboxState[index] === true) {
          const newOptionState = [...(optionState ?? []), item];
          // const uniqueOption = newOptionState.filter(
          //   (value, index, array) => array.indexOf(value) === index
          // );
          const uniqueOption = _.uniqBy(newOptionState, "id");
          setOptionState(uniqueOption);
          optionReturn(optionState);
        } else {
          const newOptionState = [...(optionState ?? [])];
          const newOption = newOptionState.splice(index, 1);
          setOptionState(newOption);
          optionReturn(optionState);
        }
      });
    } else {
      const newOption = option.list.filter((item, index) => index === value);
      setOptionState(newOption);
      optionReturn(optionState);
    }
  }, [checkboxState, value]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (index: number) => {
    setCheckboxState({
      ...checkboxState,
      [index]: !checkboxState[index],
    });
  };

  const handleRadioChange = (e: any) => {
    const value = parseInt(e.target.value);
    setValue(value);
  };

  return (
    <div>
      <CustomListItem button onClick={handleClick}>
        <ListItemOptionTitle primary={option.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </CustomListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <CustomFormControl>
            {option.type === "radio" && (
              <RadioGroup
                name={option.label}
                value={value}
                onChange={handleRadioChange}
              >
                {option.list.map((list, index) => (
                  <ListItem key={list.id}>
                    <CustomListItemIcon>
                      <FormControlLabel
                        value={index}
                        control={<CustomRadio />}
                        label={list.name}
                      ></FormControlLabel>
                    </CustomListItemIcon>

                    <ListItemSecondaryAction>
                      <ListItemPrice
                        primary={`${currency(list.price).format()}`}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </RadioGroup>
            )}

            {option.type === "checkbox" && (
              <>
                {option.list.map((list, index) => (
                  <ListItem key={list.id}>
                    <CustomListItemIcon>
                      <FormControlLabel
                        value={list.name}
                        control={
                          <CustomCheckBox
                            checked={checkboxState && checkboxState[index]}
                            onChange={() => handleCheckboxChange(index)}
                            name={list.name}
                            value={list.id}
                          />
                        }
                        label={list.name}
                      ></FormControlLabel>
                    </CustomListItemIcon>

                    <ListItemSecondaryAction>
                      <ListItemPrice
                        primary={`${currency(list.price).format()}`}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </>
            )}
          </CustomFormControl>
        </List>
      </Collapse>
      <CustomDivider />
    </div>
  );
};
export default ListOptions;
