// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hero, JsonInput, ResultsView } from '@case-details/ui-components';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { AppBar, Button, Grid, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Case, CaseData, ClaimantPrimaryDetails, ClaimantSecondaryDetails, Field } from 'ui-components/src/lib/interfaces';

const handleConverrt = () => {

}

const dataTabs: string[] = ["caseOverview", "CaseJurisdictions"]

const defaultCaseData: CaseData = {
  claimant: {
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    occupation: '',
    employedFrom: '',
    employedTo: '',
    employedCurrently: false
  },
  respondent: '',
  soleClaiment: false,
  dateOfReceipt: '',
  JurisdictionCodeList: []
} 

const parseInput = (data: string) => {
  console.log(data)
  let parsedData: Case = {
    case_id: '',
    case_type: {
      id: '',
      name: ''
    },
    tabs: []
  };
  try {
    parsedData = JSON.parse(data);
  } catch (e) {
    console.log("Handle error", e);
  }
  console.log(parsedData.case_id)

  return parsedData;
}

const parseCase = (data: Case) => {
  let parsedCase: CaseData = {
    claimant: {
      title: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      occupation: '',
      employedFrom: '',
      employedTo: '',
      employedCurrently: false
    },
    respondent: '',
    soleClaiment: false,
    dateOfReceipt: '',
    JurisdictionCodeList: []
  };
  try {
    console.log(data);
    console.log(data.tabs);
    console.log(data.tabs.filter((tab) => tab.id));
    const claimentDetails: Field[] = data.tabs.filter((tab) => tab.id == "CaseClaimant")[0].fields;
    const caseClaimantPrimaryDetails: ClaimantPrimaryDetails = claimentDetails.filter(fields => fields.id == "claimantIndType")[0].value;
    const caseClaimantSecondaryDetails: ClaimantSecondaryDetails = claimentDetails.filter(fields => fields.id == "claimantOtherType")[0].value;
    parsedCase.claimant = {
      title: caseClaimantPrimaryDetails.claimant_title1,
      firstName: caseClaimantPrimaryDetails.claimant_first_names,
      lastName: caseClaimantPrimaryDetails.claimant_last_name,
      dateOfBirth: caseClaimantPrimaryDetails.claimant_date_of_birth,
      occupation: caseClaimantSecondaryDetails.claimant_occupation,
      employedFrom: caseClaimantSecondaryDetails.claimant_employed_from,
      employedTo: caseClaimantSecondaryDetails.claimant_employed_to,
      employedCurrently: caseClaimantSecondaryDetails.claimant_employed_currently
    }
  } catch (e) {
    console.log("Handle error", e);
  }

  return parsedCase;
}

export function App() {
  const [caseData, setCaseData] = useState<CaseData>(defaultCaseData);
  const [inputValue, setInputValue] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  
  const handleParseError = () => {
    setErrorOpen(true);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCaseData(defaultCaseData);
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
          <Button variant="outlined" onClick={() => setCaseData(parseCase(parseInput(inputValue)))}>Convert</Button>
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
