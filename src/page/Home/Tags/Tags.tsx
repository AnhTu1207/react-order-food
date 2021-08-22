import { FC } from "react";
import { map } from "lodash";

import { Wrapper, ChipStyled } from "./styles";

import { TagsList } from "assets";

const Tags: FC = () => {
  return (
    <Wrapper>
      {map(TagsList, (item, index) => (
        <ChipStyled label={item.name} clickable key={index} />
      ))}
    </Wrapper>
  );
};

export default Tags;
