import React from 'react';
import { Case, CaseData } from '../interfaces';

/* eslint-disable-next-line */
export interface ResultsViewProps {
  data: CaseData;
  handleError: any;
}

export function ResultsView(props: ResultsViewProps) {
  const results: CaseData = props.data;
  return (
    <div>
      <h2>{`Claimant: ${results.claimant.title} ${results.claimant.firstName} ${results.claimant.lastName}`}</h2>
      <h2>{`Respondent: ${results.respondent}`}</h2>
      <h2>{`Sole Claimant: ${results.soleClaiment}`}</h2>
      <h2>{`Date of Receipt: ${results.dateOfReceipt}`}</h2>
    </div>
  );
}

export default ResultsView;
