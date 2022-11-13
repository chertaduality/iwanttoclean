import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetsContext';
import AddBudgetModal from './components/AddBudgetModal';

import setShowModal from './components/AddBudgetModal';

export const App = () => {
  const Container = styled.div``;
  const Header = styled.div`
    background-image: url(${'https://phonoteka.org/uploads/posts/2021-04/1618632243_19-phonoteka_org-p-sinii-fon-gradient-s-fioletovim-20.jpg'});
    height: 10rem;
    color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  `;
  const Title = styled.div`
    justify-content: start;
    font-size: 4rem;
    font-weight: bolder;
  `;
  const Menu = styled.div`
    justify-content: end;
  `;
  const Button = styled.button`
    border-radius: 10px;
    background-color: #fff;
    font-weight: bolder;
    border-style: none;
    margin: 1rem;
    height: 3rem;
  `;
  const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    align-items: flex-start;
  `;
  const Card = styled.div`
    border-radius: 10px;
    /* border-color: #fff; */
    background-color: #fff;
    filter: drop-shadow(5px 5px 0.2rem #000);

    margin: 1rem;
  `;
  const CardTitle = styled.div`
    background-color: #444ddd;
    color: #ff231f;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
  `;
  const CardContent = styled.div`
    padding: 0.5rem;
  `;

  // const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  // const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  // const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  // const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  // const { budgets, getBudgetExpenses } = useBudgets();
  // const openAddExpenseModal = (budgetId) => {
  //   setShowAddExpenseModal(true)
  //   setAddExpenseModalBudgetId(budgetId)
  // }
  return (
    <>
      <Container>
        <Header>
          <Title>iWantTo</Title>
          <Menu>
            <Button onClick={() => setShowModal((prev) => !prev)}>
              Добавить группу хотелок
            </Button>
            <Button>Добавить хотелку</Button>
          </Menu>
        </Header>
        <div>
          <Cards>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
            <Card>
              <CardTitle>Title</CardTitle>
              <CardContent>some content</CardContent>
            </Card>
          </Cards>
        </div>
      </Container>
      {/* <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      /> */}
    </>
  );
};

export default App;
