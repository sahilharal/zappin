import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function SubCategoriesPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Sub Categories
        </Typography>
        <Typography variant="body1">
          Manage your product sub-categories here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default SubCategoriesPage; 