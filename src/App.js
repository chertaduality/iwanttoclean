import React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import Card from './components/Card';
import AddBudgetModal from './components/AddBudgetModal';
// import { GlobalStyle } from './globalStyles';

export const App = () => {
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
  const Cards = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    align-content: start;
    margin-left: 10%;
  `;

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  const openAddBudgetModal = () => {
    setShowAddBudgetModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Header>
          <Title>iWantTo</Title>
          <Menu>
            <Button onClick={openAddBudgetModal}>Добавить группу</Button>
            <AddBudgetModal
              showAddBudgetModal={showAddBudgetModal}
              setShowAddBudgetModal={setShowAddBudgetModal}
            />
            {/* <ModalProvider> */}
            {/* <FancyModalButton /> */}
            {/* </ModalProvider> */}
          </Menu>
        </Header>
        <div>
          <Cards>
            {/* <Card />
            <Card />
            <Card /> */}
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
