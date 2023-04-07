import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { SelectProps } from './types'

export default function CustomSelect({label, id, defaultValue, labelId, menuItems}: SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>
        {label}
      </InputLabel>
      <Select
        label={label}
        defaultValue={defaultValue}
        id={id}
        labelId={labelId}
      >
        {
          menuItems.map((item, index) => (
            <MenuItem value={item.value} key={index}>{item.text}</MenuItem>
          ))
        }
        
      </Select>
    </FormControl>
  )
}
