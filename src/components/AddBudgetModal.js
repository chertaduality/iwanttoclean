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

export default function AddBudgetModal(){

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

const styles = createStyles ({
  button: {
    marginBottom: '0.5rem'
  }
})

const [openAddBudgetModal, setShowAddBudgetModal] = React.useState(false);
const handleOpenAddBudgetModal = () => setShowAddBudgetModal(true);
const handleCloseAddBudgetModal = () => setShowAddBudgetModal(false);
const [prio, setPrio] = React.useState('');

const handleChange = (event: SelectChangeEvent) => {
  setPrio(event.target.value);
};

  return (
    <div>
      <Button onClick={handleOpenAddBudgetModal} variant="contained" sx={{ m: 0.8 }}color='secondary'>Добавить группу</Button>
      <Modal
        open={openAddBudgetModal}
        onClose={handleCloseAddBudgetModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
    >
   
        </Box>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <TextField id="outlined-basic" label="Название группы" variant="outlined" margin="normal"/>
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
        <Button onClick={handleCloseAddBudgetModal} variant="contained" color='secondary'>Добавить</Button>
        </Box>
        
      </Modal>
    </div>
  );
}
