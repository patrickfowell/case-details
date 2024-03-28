// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hero, JsonInput, ResultsView } from '@case-details/ui-components';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { AppBar, Button, Grid, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const handleConverrt = () => {

}

export function App() {
  const [caseData, setCaseData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  
  const handleParseError = () => {
    setErrorOpen(true);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCaseData("");
    setErrorOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12}>
          <Hero/>
        </Grid>
        <Grid item xs={11}>
          <JsonInput handleChange={setInputValue}/>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" onClick={() => setCaseData(inputValue)}>Convert</Button>
        </Grid>
        <Grid item xs={12}>
          <ResultsView data={caseData} handleError={handleParseError}/>
        </Grid>
      </Grid>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </>
  );
}

export default App;
