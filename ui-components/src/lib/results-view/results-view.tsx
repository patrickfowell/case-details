import React from 'react';
import { Case, CaseData } from '../interfaces';
import { Collapse, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack, Typography } from '@mui/material';
import { ExpandLess, StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

/* eslint-disable-next-line */
export interface ResultsViewProps {
  data: CaseData;
  handleError: any;
}

export function ResultsView(props: ResultsViewProps) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const results: CaseData = props.data;

  const claimentRows = [
    {label: "Title", value: results.claimant.title, icon: <PersonIcon />},
    {label: "First Name", value: results.claimant.firstName, icon: <PersonIcon />},
    {label: "Last Name", value: results.claimant.lastName, icon: <PersonIcon />},
    {label: "Date of Birth", value: results.claimant.dateOfBirth, icon: <CalendarMonthIcon />},
    {label: "Employed From", value:  results.claimant.employedFrom, icon: <CalendarMonthIcon />},
    {label: "Employed To", value: results.claimant.employedTo, icon: <CalendarMonthIcon />},
    {label: "Curently Employed", value:  results.claimant.employedCurrently, icon: results.claimant.employedCurrently ? <CheckCircleIcon /> : <CancelIcon/>},
  ];

  const nonClaimentRows = [
    {label: "Respondent", value: results.respondent, icon: <PersonIcon />},
    {label: "Sole Claimant", value: results.soleClaiment, icon: results.soleClaiment ? <CheckCircleIcon /> : <CancelIcon/>},
    {label: "Date of Receipt", value: results.dateOfReceipt, icon: <CalendarMonthIcon />},
  ];

  const test: String = "test secondary string";

  return (
    <Paper>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="results"
        subheader={
          <ListSubheader component="div" id="results">
            Case Details
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Claimant" secondary={`${results.claimant.title} ${results.claimant.firstName} ${results.claimant.lastName}`}/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {claimentRows.map((row) => (
              <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                {row.icon}
              </ListItemIcon>
              <ListItem>
                <ListItemText primary={row.label} secondary={row.value.toString()}/>
              </ListItem>
            </ListItem>
            ))}
          </List>
        </Collapse>
        {nonClaimentRows.map((row) => (
          <ListItem>
          <ListItemIcon>
            {row.icon}
          </ListItemIcon>
          <ListItem>
            <ListItemText primary={row.label} secondary={row.value.toString()}/>
          </ListItem>
        </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ResultsView;
