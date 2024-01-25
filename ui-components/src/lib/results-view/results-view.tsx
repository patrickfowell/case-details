import styles from './results-view.module.css';

/* eslint-disable-next-line */
export interface ResultsViewProps {
  data: any;
  handleError: any;
}

export function ResultsView(props: ResultsViewProps) {
  if (props.data == "error") {
    props.handleError();
  }
  return (
    <div className={styles['container']}>
      <h2>{props.data}</h2>
    </div>
  );
}

export default ResultsView;
