import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function DashboardPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Manage your dashboard here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default DashboardPage; 