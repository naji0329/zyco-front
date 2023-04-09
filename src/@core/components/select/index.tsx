import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { SelectProps } from './types'
import { Icon } from '@iconify/react'

export default function CustomSelect({label, id, defaultValue, labelId, menuItems, size, startIcon}: SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>
        {label}
      </InputLabel>
      <Select
        size={size ? size:'medium'}
        label={label}
        defaultValue={defaultValue}
        id={id}
        labelId={labelId}
        startAdornment={startIcon ? <Icon icon={startIcon} />:undefined}
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
