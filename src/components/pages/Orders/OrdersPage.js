import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function OrdersPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Orders
        </Typography>
        <Typography variant="body1">
          Manage your orders here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default OrdersPage; 