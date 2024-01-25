import { TextField } from '@mui/material';
import styles from './json-input.module.css';

/* eslint-disable-next-line */
export interface JsonInputProps {
  handleChange: (data: string) => void;
}

export function JsonInput(props: JsonInputProps) {
  const handleChange = (data: string) => {
    props.handleChange(data);
  }

  return (
    <TextField
      id="case-data-input"
      label="JSON Input"
      variant="outlined"
      onChange={(v) => handleChange(v.target.value)}
      fullWidth/>
  );
}

export default JsonInput;
