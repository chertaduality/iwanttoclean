import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createStyles } from '@mui/material';
import { makeStyles } from '@mui/material';
import theme from './../App.js';
import { ThemeProvider } from '@mui/material';
import { useRef } from 'react';
import { useBudgets } from '../contexts/BudgetsContext';

import { createTheme } from '@mui/material/styles';

export default function AddBudgetModal({ show, handleCloseAddBudgetModal }) {
  // const classes = useStyles();
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
  const styles = createStyles({
    button: {
      marginBottom: '0.5rem',
    },
  });

  const nameRef = useRef();
  const maxRef = useRef();
  const addBudget = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();

    addBudget({
      name: nameRef.current.value,
    });
    handleCloseAddBudgetModal();
  }

  const [openAddBudgetModal, setShowAddBudgetModal] = React.useState(false);
  const handleOpenAddBudgetModal = () => setShowAddBudgetModal(true);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleOpenAddBudgetModal}
          variant="contained"
          sx={{ m: 0.8 }}
          color="primary"
          show={show}
        >
          Добавить группу
        </Button>
        <Modal
          open={openAddBudgetModal}
          onClose={handleCloseAddBudgetModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormGroup onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              ></Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl ref={nameRef} fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Название группы"
                    variant="outlined"
                    margin="normal"
                  />
                </FormControl>
              </Box>
            </FormGroup>
            <Button
              onClick={handleCloseAddBudgetModal}
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
