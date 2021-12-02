import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .MuiStepIcon-root.MuiStepIcon-active": {
        color: "var(--color-button-hover)",
      },
      "& .MuiStepIcon-root.MuiStepIcon-completed": {
        color: "var(--color-primary)",
      },
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

enum PaymentStatus {
  PAYMENT = "Payment",
  FINDING_DRIVER = "Finding driver",
  COOKING_FOODS = "Cooking foods",
  DELIVERING = "Delivering",
  DONE = "Done",
}

function getSteps() {
  return [
    PaymentStatus.PAYMENT,
    PaymentStatus.FINDING_DRIVER,
    PaymentStatus.COOKING_FOODS,
    PaymentStatus.DELIVERING,
    PaymentStatus.DONE,
  ];
}

// function getStepContent(stepIndex: number) {
//   switch (stepIndex) {
//     case 0:
//       return "Processing ...";
//     case 1:
//       return "What is an ad group anyways?";
//     case 2:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown stepIndex";
//   }
// }

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
