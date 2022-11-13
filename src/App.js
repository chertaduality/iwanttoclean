import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider } from 'styled-react-modal';
import { useState } from 'react';
import FocusLock from 'react-focus-lock';

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
    border-color: #fff;
    background-color: #fff;
    filter: drop-shadow(5px 5px 0.2rem #000);

    margin: 1rem;
  `;
  const CardTitle = styled.div`
    background-color: #444ddd;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem;
  `;
  const CardContent = styled.div`
    padding: 0.5rem;
  `;

  const StyledModal = Modal.styled`
width: 20rem;
height: 20rem;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
opacity: ${(props) => props.opacity};
transition : all 0.3s ease-in-out;`;
  const FancyModalButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (e) => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Button onClick={toggleModal}>Добавить группу хотелок</Button>
        <Button onClick={toggleModal}>Добавить хотелку</Button>
        <StyledModal
          isOpen={isOpen}
          onEscapeKeydown={toggleModal}
          role="dialog"
          aria-modal={true}
          aria-labelledby="modal-label"
        >
          <FocusLock>
            <p id="modal-label">I am an accessible modal!</p>
            <Button onClick={toggleModal}>Close me</Button>
          </FocusLock>
        </StyledModal>
      </>
    );
  };
  const AddBudgetModal = () => {
    return console.log(2 + 2);
  };

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
            <ModalProvider>
              <FancyModalButton />
            </ModalProvider>
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
