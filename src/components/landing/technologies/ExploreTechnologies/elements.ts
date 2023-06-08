import React from 'react';
import { Divider, styled } from '@mui/material';

export const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: '16px 0',
  border: 0,
  borderBottom: `4px solid ${theme.palette.divider}`,
  borderTopWidth: 10,
  borderRadius: '2px',
  maxWidth: '100%',
  alignSelf: 'center',
 backgroundColor:'#113F67'
}));