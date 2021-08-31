import { FC, useState } from "react";
import { map } from "lodash";

import { Wrapper, ChipStyled, useStyles } from "./styles";

import { TagsList } from "assets";

const Tags: FC = () => {
  const classes = useStyles();
  const [isClick, setIsClick] = useState(null);

  const handleOnClick = (id: any) => {
    setIsClick(id)
  }

  return (
    <Wrapper>
      {map(TagsList, (item, index) => (
        <ChipStyled
        label={item.name}
        onClick={() => handleOnClick(index)}
        clickable
        key={index}
        className={isClick == `${index}` ? classes.onActive : ""}
        />
      ))}
    </Wrapper>
  );
};

export default Tags;
