import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider } from 'styled-react-modal';
import { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';
import ProgressBar from './components/Progress';
import Card from './components/Card'
export const App = () => {
  const Container = styled.div``;
  const Header = styled.div`
    // background-image: url(${'https://phonoteka.org/uploads/posts/2021-04/1618632243_19-phonoteka_org-p-sinii-fon-gradient-s-fioletovim-20.jpg'});
    background-color: #fff;
    height: 10rem;
    color: #4B0082;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4B0082;
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
  const Button = styled.button`
border-radius: 10px;
background-color: #F0FFFF;
font-weight: bolder;
border-style: none;
margin: 1rem;
height: 3rem;
border: 1px solid #1E90FF;
&:hover {
  color: #696969;
  border: 1px solid #4682B4;
  background-color: #fff;
}
  `;
  const Cards = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    align-content: start;
    /* border: 4px double black; */
    margin-left: 10%;
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
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);
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
            <Card />
            <Card />
            <Card />
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
