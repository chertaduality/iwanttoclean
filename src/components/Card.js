import React from 'react';
import styled from 'styled-components';
import { currencyFormatter } from '../utils';
// import ProgressBar from './Progress';

const Card = ({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  const Button = styled.button`
    border-radius: 10px;
    background-color: #f0ffff;
    font-weight: bolder;
    border-style: none;
    margin: 1rem;
    height: 3rem;
    border: 1px solid #1e90ff;
    &:hover {
      color: #696969;
      border: 1px solid #4682b4;
      background-color: #fff;
    }
  `;

  const Card = styled.div`
    border: 1px solid #fff;
    border-radius: 10px;
    /* border-color: #fff; */
    border-bottom: 1px solid #4b0082;
    background-color: #fff;
    /* filter: drop-shadow(5px 10px 0.5rem rgb(105 105 105)); */
    padding: 1rem;
    margin: 1rem;
    &:hover {
      border: 1px solid #4b0082;
      /* background-color: rgba(106 90 205 0.1); */
      /* background-color: #E6E6FA; */
    }
  `;
  const CardTitle = styled.div`
    /* background-color: #444ddd; */
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
  `;
  const CardContent = styled.div`
    padding: 0.5rem;
  `;
  const classNames = [];
  if (amount < max) {
    classNames.push('bg-success', 'bg-opacity-10');
  } else if (gray) {
    classNames.push('bg-light');
  }

  return (
    <Card className={classNames.join(' ')}>
      <CardTitle>
        <div>{name}</div>
        <div>{<span>{currencyFormatter.format(amount)}</span>}</div>
      </CardTitle>
      <CardContent>some content</CardContent>
      {/* <ProgressBar color={'#ff7979'} width={'150px'} value={15} max={100} /> */}
      <Button>Добавить</Button>
      <Button>Просмотреть</Button>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-share"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </Button>
    </Card>
  );
};

function getProgressBarVariant(amount, max) {
  const ratio = max / amount;
  if (ratio < 0.5) return 'danger';
  if (ratio < 0.75) return 'warning';
  return 'success';
}
export default Card;
