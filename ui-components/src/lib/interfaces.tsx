export interface Juristiction {
	id: string;
	value: {
		judgmentOutcome: string;
		juristictionCodesList: string
	}
}

export interface Field {
	id: string;
	label: string;
	value: any;
	formatted_value: string;
}

export interface Tab {
	id: string;
	label: string;
	order: number;
	fields: Field[]
}

export interface CaseType {
    id: string;
    name: string;
}

export interface Case {
    case_id: string;
    case_type: CaseType;
    tabs: Tab[]
}

export interface Claimant {
    title: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	occupation: string;
	employedFrom: string;
	employedTo: string;
	employedCurrently: boolean;
}

export interface ClaimantPrimaryDetails {
    claimant_gender: string;
    claimant_title1: string;
    claimant_last_name: string;
    claimant_first_names: string;
    claimant_date_of_birth: string;
}

export interface ClaimantSecondaryDetails {
    claimant_disabled: boolean;
    claimant_occupation: string;
    claimant_employed_to: string;
    claimant_employed_from: string;
    claimant_employed_currently: boolean;
}

export interface CaseData {
    claimant: Claimant;
	respondent: string;
	soleClaiment: boolean;
	dateOfReceipt: string;
    jurisdictionCodeList: string[];
}
