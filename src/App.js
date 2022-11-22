import React from 'react';
import styled from 'styled-components';
// import { useState, useEffect } from 'react';
import BudgetCard from './components/Card';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { createTheme } from '@mui/material/styles';
// import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetsContext';

export const App = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const Container = styled.div``;
  const Header = styled.div`
    // background-image: url(${'https://phonoteka.org/uploads/posts/2021-04/1618632243_19-phonoteka_org-p-sinii-fon-gradient-s-fioletovim-20.jpg'});
    background-color: #fff;
    height: 10rem;
    color: #4b0082;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4b0082;
  `;
  const Title = styled.div`
    justify-content: start;
    font-size: 4rem;
    font-weight: bolder;
    margin-left: 10%;
  `;
  const Menu = styled.div`
    justify-content: end;
    margin-right: 10%;
  `;

  const Cards = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    align-content: start;
    margin-left: 10%;
  `;
  // const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  // const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  // const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  // const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  // const { budgets, getBudgetExpenses } = useBudgets();
  console.log(localStorage.getItem('budgets', 'espenses'));
  return (
    <>
      <Container>
        <Header>
          <Title>iWantTo</Title>
          <Menu>
            <AddBudgetModal />
            <AddExpenseModal />
          </Menu>
        </Header>
        <div>
          <Cards>
            <BudgetCard />

            {/* {budgets.map((budget) => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              );
              return (
                <BudgetCard
                  key={budget.id}
                  name={budget.name}
                  amount={amount}
                  max={budget.max}
                  onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                  onViewExpensesClick={() =>
                    setViewExpensesModalBudgetId(budget.id)
                  }
                />
              );
            })} */}
          </Cards>
        </div>
      </Container>
    </>
  );
};

export default App;
