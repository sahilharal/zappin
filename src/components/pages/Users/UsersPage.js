import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function UsersPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Users
        </Typography>
        <Typography variant="body1">
          Manage your users here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default UsersPage; 