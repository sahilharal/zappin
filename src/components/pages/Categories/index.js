import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Categories() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Categories
        </Typography>
        <Typography variant="body1">
          Manage your product categories here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Categories; 