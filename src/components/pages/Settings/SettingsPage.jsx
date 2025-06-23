import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function SettingsPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1">
          Manage your application settings here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default SettingsPage; 