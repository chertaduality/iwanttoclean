import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

import useLocalStorage from './../hooks/useLocalStorage';

export default function AddBudgetModal() {
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
  const theme = createTheme({
    palette: {
      primary: {
        light: '#8561c5',
        main: '#673ab7',
        dark: '#482880',
        contrastText: '#fff',
      },
      secondary: {
        light: '#f73378',
        main: '#f50057',
        dark: '#ab003c',
        contrastText: '#fff',
      },
    },
  });

  const [openAddBudgetModal, setOpenAddBudgetModal] = useState(false);
  const [budgetName, setBudgetName] = useState('');
  // const [value, setValue] = useState('');

  const handleOpenAddBudgetModal = () => {
    setOpenAddBudgetModal(true);
  };
  const handleCloseAddBudgetModal = () => {
    setOpenAddBudgetModal(false);
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setBudgetName(event.target.value);
  };

  const AddBudget = () => {
    setBudgetName();
    //
    handleCloseAddBudgetModal({ budgetName: '' });
  };
  const handleSubmitAddBudgetModal = (event) => {
    localStorage.setValue('budgetName', JSON.stringify());
    event.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem('budgetName', JSON.stringify());
  }, []);
  // localStorage.clear()
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleOpenAddBudgetModal}
          variant="contained"
          sx={{ m: 0.8 }}
          color="primary"
        >
          Добавить группу
        </Button>
        <Modal open={openAddBudgetModal} onClose={handleCloseAddBudgetModal}>
          <Box sx={style}>
            <FormGroup>
              <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
              ></Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField
                    label="Название группы"
                    variant="outlined"
                    margin="normal"
                    placeholder="Введите название"
                    value={() => AddBudget()}
                    // onChange={handleChange}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                </FormControl>
              </Box>
            </FormGroup>
            <Button
              onSubmit={handleSubmitAddBudgetModal}
              onClick={AddBudget}
              variant="contained"
              color="secondary"
            >
              Добавить
            </Button>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
