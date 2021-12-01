import { FC, useState, useEffect } from "react";
import { map } from "lodash";
import classNames from "classnames";

import { useGetCategories } from "api/category";

import { Spinner } from "components";
import { Wrapper, ChipStyled, useStyles, SpinnerContainer } from "./styles";

const Tags: FC = () => {
  const classes = useStyles();
  const {
    runRequest: fetchCategories,
    isLoading: fetchingCategories,
    responseData: categories,
  } = useGetCategories({});

  const [isClick, setIsClick] = useState(-1);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClick = (index: number) => {
    setIsClick(index);
  };

  return (
    <Wrapper>
      {fetchingCategories ? (
        <SpinnerContainer>
          <Spinner color="var(--color-primary)" />
        </SpinnerContainer>
      ) : (
        map(categories?.data || [], (item, index) => (
          <ChipStyled
            label={decodeURI(item.name)}
            onClick={() => handleOnClick(Number(index))}
            clickable
            key={index}
            className={classNames({
              [`${classes.onActive}`]: isClick === index,
            })}
          />
        ))
      )}
    </Wrapper>
  );
};

export default Tags;
