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

  const [openAddExpenseModal, setShowAddExpenseModal] = React.useState(false);
  const handleOpenAddExpenseModal = () => setShowAddExpenseModal(true);
  const handleCloseAddExpenseModal = () => setShowAddExpenseModal(false);
  const [prio, setPrio] = useState('');
  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState('');
  const [value, setValue] = useState('')



  const handleChangeExpense = (event) => {
    setExpense(event.target.expense)
    setValue(event.target.expense);
    
    
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.price);
    setValue(event.target.price);
    
  };

  const handleChangePrio = (event) => {
    setPrio(event.target.prio)
    setValue(event.target.prio);
    console.log(event.target.prio)
    
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
      <Modal
        open={openAddExpenseModal}
        onClose={handleCloseAddExpenseModal}
      >
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
                  value={expense}
                  onChange={handleChangeExpense}
                />
                <TextField
                  id="outlined-basic"
                  label="Примерная стоимость"
                  variant="outlined"
                  margin="normal"
                  value={value}
                  onChange={handleChangePrice}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel                  
               >
                  Выберите приоритет
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={prio}
                  label="prio"
                  // value={value}
                  onChange={handleChangePrio}>
                
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
          <Button onClick={handleCloseAddExpenseModal} variant="contained">
            Добавить
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
