import { Paper, Typography } from '@mui/material';
import styles from './hero.module.css';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <Paper>
      <Typography variant='h1'>Welcome</Typography>
    </Paper>
  );
}

export default Hero;
