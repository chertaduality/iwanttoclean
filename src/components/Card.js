import React from 'react';
import styled from 'styled-components';
import { currencyFormatter } from '../utils';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
// import ProgressBar from './Progress';

const BudgetCard = ({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  
  const classNames = [];
  if (amount < max) {
    classNames.push('bg-success', 'bg-opacity-10');
  } else if (gray) {
    classNames.push('bg-light');
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    
    <Card sx={{ minWidth: 275 }} className={classNames.join(' ')}>
    <CardContent>
      <Typography variant="h5" component="div">
      Тачка {name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {<span>{currencyFormatter.format(amount)}</span>}
      </Typography>

      <Typography variant="body2">
      {/* <ProgressBar color={'#ff7979'} width={'150px'} value={15} max={100} /> */}
      </Typography>
      <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} color="secondary"/>
    </Box>
    </CardContent>
    <CardActions>
    {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="contained"
              color='secondary'
              className="ms-auto"
              onClick={onAddExpenseClick}
              sx={{ m: 0.2 }}
            >
              Добавить хотелку
            </Button>
            <Button onClick={onViewExpensesClick} size="small" sx={{ m: 0.2 }} variant="outlined" color='secondary'>
              Список хотелок
            </Button>
            <Button size="small" color='secondary'>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-share"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </Button>
          </Stack>
        )}
      {/* <Button size="small" variant="contained">Добавить</Button>
      <Button size="small" variant="outlined">Просмотреть</Button>
      <Button size="small">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-share"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </Button> */}
         {/* {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(max, amount)}
            min={0}
            max={max}
            now={amount}
          />
        )} */}
    
  
    </CardActions>
  </Card>
  );
};

function getProgressBarVariant(amount, max) {
  const ratio = max / amount;
  if (ratio < 0.5) return 'danger';
  if (ratio < 0.75) return 'warning';
  return 'success';
}
export default BudgetCard;
