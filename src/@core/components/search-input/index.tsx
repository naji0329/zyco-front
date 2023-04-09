import { Icon } from '@iconify/react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { ChangeEvent, useState } from 'react'
import { SearchInputProps } from './types';

function SearchInput({borderLess}: SearchInputProps) {
  const [search, setSearch] = useState('');

  return (
    <OutlinedInput
      fullWidth
      size='small'
      placeholder='Search'
      value={search}
      id='search'
      onChange={(e: ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
      type='text'
      sx={{
        backgroundColor: 'transparent',
        border: borderLess ? 'none':'initial',
        outline: 'none'
      }}
      endAdornment={
        <InputAdornment position='end'>
          <IconButton
            edge='end'
            onClick={()=>console.log('search')}
          >
            <Icon fontSize={20} icon='ic:baseline-search' />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default SearchInput