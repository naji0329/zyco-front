import { Icon } from '@iconify/react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import CustomChip from 'src/@core/components/mui/chip'
import { UserItemProps } from './types';

const UserItem = ({item}: UserItemProps) => {
  const theme = useTheme();
  
  return (
    <Box
      key={item.title}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: item.mb ? item.mb:undefined
      }}
    >
      <Avatar src={item.src} variant={item.avatarVariant} sx={{ mr: 3, width: 38, height: 38 }} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
            {item.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& svg': {
                mr: 1.5,
                color: 'text.secondary',
                verticalAlign: 'middle'
              }
            }}
          >
            {
              item.icon && <Icon icon={item.icon} fontSize='1rem' />
            }
            <Typography variant='caption'>{item.subtitle}</Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3
        }}>
          {
            item.customChip && <CustomChip
              skin='light'
              size='small'
              label={item.customChip?.chipText}
              color={item.customChip?.chipColor}
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
            />
          }
          {
            item.more &&
            <button
              style={{
                backgroundColor: 'transparent',
                outline: 'none',
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '6px',
                width: '36px',
                height: '36px'
              }}
            >
              <Icon icon='material-symbols:more-vert' fontSize='1.5rem' color={theme.palette.primary.main} />
            </button>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default UserItem;