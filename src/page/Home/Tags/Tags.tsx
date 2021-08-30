import { FC } from "react";
import { map } from "lodash";

import { Wrapper, ChipStyled } from "./styles";

import { TagsList } from "assets";

const Tags: FC = () => {
	function onClickSlidebar(event:any) {
		event.target.style.backgroundColor = 'var(--color-primary)';
		event.target.style.color = '#FFF';
	}
  return (
    <Wrapper>
      {map(TagsList, (item, index) => (
        <ChipStyled onClick={onClickSlidebar}  label={item.name} clickable key={index} />
      ))}
    </Wrapper>
  );
};

export default Tags;