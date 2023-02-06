import React, {useState} from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Divider, Grid, makeStyles, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material';
// import { useWeb3React } from '@mui/material';


// import { CopyToClipboard } from '@mui/material';
import { Container } from "@mui/material";
import { CallMadeSharp, MonetizationOnSharp } from '@mui/icons-material';
import { styles } from "./styles";





// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];



//   export default function Txbldr() {



//   const [address, setAddress] = useState({
//     value: '',
//     isValid: true,
//     isLoading: false,
//     isDisabled: false,
//     type: undefined
//   });

//   const [contract, setContract] = useState({
//     abi: undefined,
//     functions: undefined,
//     error: undefined,
//     isLoading: false,
//   });

//   const [func, setFunc] = useState({
//     selector: undefined,
//     params: [],
//     functions: undefined,
//     error: undefined,
//     result: undefined,
//   });

//  const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState<{
//     [k: number]: boolean;
//   }>( {} );
      
      

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? // It's the last step, but not all steps have been completed,
//           // find the first step that has been completed
//           steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

  

  

  

  

//   return (
//     <>
      
// <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps: { completed?: boolean } = {};
//           const labelProps: {
//             optional?: React.ReactNode;
//           } = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Box sx={{ flex: '1 1 auto' }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>







//           <div >
//             <Box  sx={styles.box}>
//                 <Card variant="outlined" sx={styles.card} >
//                     <CardContent>
//                     <Stepper orientation='vertical' sx={styles.stepper} >
//                         <Step>
//                             <StepLabel>Contract</StepLabel>
                            
//                                 <StepContent>
                    
//                                     <TextField
//                                         label='Address'
//                                         variant='outlined'
//                                         size='small'
//                                         color='primary'
//                                         sx={styles.grow}
//                                         fullWidth
//                                          //disabled={address.isDisabled || !active}
//                                     />

                                        

                                        
                                
                        
//                                         <Divider sx={styles.divider} />
                                        
                                        
                                        
                                    
                                    
                                    
                            
//                             </StepContent>
//                         </Step>
                            

//                         <Step expanded sx={styles.stepper}>
//                         <StepLabel sx={styles.stepper}>Transaction</StepLabel>
//                         <StepContent sx={styles.stepper}>
                        
//                         </StepContent>
//                         </Step>
//                         <Step expanded={func.selector}>
//                             <StepLabel sx={styles.stepper}>Actions</StepLabel>
//                             <StepContent sx={styles.stepper}>
//                                 <Button
//                                 color='primary'
//                                 variant='contained'
//                                 sx={styles.stepper}
//                                 startIcon={<CallMadeSharp />}
//                                 //   onClick={call}
//                                 //   disabled={!active}
//                                 >
//                                 Call
//                                 </Button>
//                                 <Button
//                                 color='primary'
//                                 variant='contained'
//                                 sx={styles.btn}
//                                 startIcon={<MonetizationOnSharp />}
                            
//                                 >
//                                 Estimate
//                                 </Button>
//                                 <Button
//                                 color='primary'
//                                 variant='contained'
                                
                            
//                                 sx={styles.btn}
                                
//                                 >
//                                 Send
//                                 </Button>
//                                 <Button
//                                 color='primary'
//                                 variant='contained'
//                                 sx={styles.btn}
//                                 >
//                                 Share
//                                 </Button>
                            
                            
//                             </StepContent>
//                         </Step>
//                             </Stepper>
//                       </CardContent>
//                        <Button onClick={handleNext} sx={{ mr: 1 }}>
//                 Next
//               </Button>
//                 </Card>
//               </Box>
//       </div>
      

      
               
             
//     </>
//   );
// }

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional che</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
            asdfasdf
            asdfasdfasdf
            asd
            fasd
            asdfasdfasdfasdfasdf
            asdfasdfasdf
            asdfasdfasdf
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Typography sx={ { mt: 2, mb: 1 } }>Stepssss { activeStep + 1 }
              asdfjasdfjal
              askdfjlasdkfj;<a href="a">asdfasdf</a>
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
           
              
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}