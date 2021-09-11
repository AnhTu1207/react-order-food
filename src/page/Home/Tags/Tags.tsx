import { FC, useState } from "react";
import {  map } from "lodash";

import { Wrapper, ChipStyled, useStyles } from "./styles";

import { TagsList } from "assets";

const Tags: FC = () => {
	const classes = useStyles();

	const [isClick, setIsClick] = useState(-1);

  const handleOnClick = (index: number) => {
    setIsClick(index)
  }

  return (
    <Wrapper>
      {map(TagsList, (item, index) => (
        <ChipStyled
        label={item.name}
        onClick={() => handleOnClick(Number(index))}
        clickable
        key={index}
        className={isClick === index ? classes.onActive : ""}
        />
      ))}
    </Wrapper>
  );
};

export default Tags;
