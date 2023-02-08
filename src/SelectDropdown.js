import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//todo make this able to take in a json list and dynamically label
export default function BasicSelect() {
  const [test, setTestValue] = React.useState('');

  const handleChange = (event) => {
    setTestValue(event.target.value);
  };

  return (

    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel id="demo-simple-select-label">Test</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={test}
          label="DropdownName"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  );
}
