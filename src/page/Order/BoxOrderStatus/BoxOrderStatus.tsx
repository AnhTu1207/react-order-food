import { FC, useState } from "react";
import { Card, Box } from "@material-ui/core";

import CustomizedSteppers from "./CustomizedStepper";

import { BoxOrderItem } from "components";

const BoxOrderStatus: FC = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  }


  return (
    <>
      <Card>
        <Box>
          <CustomizedSteppers activeStep={activeStep} />
        </Box>
      </Card>
      <BoxOrderItem onPaymentSuccess={handleNextStep} />
    </>
  );
};

export default BoxOrderStatus;
