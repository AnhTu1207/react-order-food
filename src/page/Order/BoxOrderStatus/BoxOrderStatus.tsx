import { FC } from "react";
import { Card, Box } from "@material-ui/core";

import CustomizedSteppers from "./CustomizedStepper";

import { BoxOrderItem } from "components";

const BoxOrderStatus: FC = () => {
  
  return (
    <>
      <Card>
        <Box>
          <CustomizedSteppers />
        </Box>
      </Card>
      <BoxOrderItem />
    </>
  );
};

export default BoxOrderStatus;
