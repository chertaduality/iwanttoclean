import { useRef, useState } from 'react';
import { useBudgets } from '../contexts/BudgetsContext';
import styled from 'styled-components';
import { Button } from './../App';
import CloseModal from './CloseModal';

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      // max: parseFloat(maxRef.current.value),
    });
    handleClose();
  };
  const [showModal, setShowModal] = useState(false);
  //   const Container = styled.div``;
  const Modal = styled.div`
    padding: 4px;
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    height: 80vh;
    border: 1px solid black;
  `;
  const Form = styled.form`
    margin: auto;
    display: flex;
    flex-direction: column;
  `;

  return (
    <div>
      {showModal === true ? (
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <CloseModal setShowModal={setShowModal} />
          </Form>
          <div>TEST</div>
          <Form>TEST</Form>
        </Modal>
      ) : (
        <>
          <h4>Click the button to show the modal.</h4>
          <button onClick={() => setShowModal((prev) => !prev)}>Show</button>
        </>
      )}

      {/* <Modal.Header closeButton>
    <Modal.Title>Новая група хотелок</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Название</Form.Label>
      <Form.Control ref={nameRef} type="text" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="max">
      <Form.Label>Расходы</Form.Label>
      <Form.Control
        ref={maxRef}
        type="number"
        required
        min={0}
        step={0.01}
      />
    </Form.Group>
    <div className="d-flex justify-content-end">
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </div>
  </Modal.Body> */}
    </div>
  );
}
