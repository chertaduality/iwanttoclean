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
import { useState } from 'react';

export default function AddExpenseModal() {
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

  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const handleOpenAddExpenseModal = () => setOpenAddExpenseModal(true);
  const handleCloseAddExpenseModal = () => setOpenAddExpenseModal(false);
  const [prio, setPrio] = useState('');
  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState('');
  const [value, setValue] = useState('');

  const handleChangeExpense = (event) => {
    setExpense(event.target.value);
    setValue(event.target.value);
    // console.log(event.target.expense);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    setValue(event.target.value);
    console.log(setPrice);
  };

  const handleChangePrio = (event) => {
    setPrio(event.target.value);
    setValue(event.target.value);
    // console.log(event.target.prio);
  };

  const AddExpense = ({ expense, price, prio }) => {
    setValue('expense');
    handleCloseAddExpenseModal({ expense: '' });
    localStorage.setItem('expense');
    // console.log('test', value)
  };

  return (
    <div>
      <Button
        onClick={handleOpenAddExpenseModal}
        variant="outlined"
        color="secondary"
        margin="normal"
        sx={{ m: 0.8 }}
      >
        Добавить хотелку
      </Button>
      <Modal open={openAddExpenseModal} onClose={handleCloseAddExpenseModal}>
        <Box sx={style}>
          <FormGroup>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            ></Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Название хотелки"
                  variant="outlined"
                  margin="normal"
                  value={AddExpense.expense}
                  onChange={handleChangeExpense}
                />
                <TextField
                  id="outlined-basic"
                  label="Примерная стоимость"
                  variant="outlined"
                  margin="normal"
                  value={AddExpense.price}
                  onChange={handleChangePrice}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Выберите приоритет</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={AddExpense.prio}
                  label="prio"
                  // value={value}
                  onChange={handleChangePrio}
                >
                  <MenuItem value={'high'}>Высокий</MenuItem>
                  <MenuItem value={'medium'}>Средний</MenuItem>
                  <MenuItem value={'low'}>Низкий</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выберите категорию</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
            </Box>
          </FormGroup>
          <Button
            onClick={() => AddExpense()}
            variant="contained"
            color="secondary"
          >
            Добавить
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
