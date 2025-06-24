import React, { useState } from 'react';
import {
  Box, Typography, Paper, Grid, TextField, Button,
  MenuItem, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Select, InputLabel, FormControl
} from '@mui/material';

function OffersPage() {
  const [form, setForm] = useState({
    couponCode: '',
    percentage: '',
    description: '',
    expiryDate: '',
    status: 'active',
    image: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [offers, setOffers] = useState([
    // {
    //   couponCode: 'Abcodetech1234',
    //   percentage: '75%',
    //   description: 'xyz',
    //   expiryDate: '0001-11-30',
    //   status: 'inactive',
    //   image: ''
    // },
    // {
    //   couponCode: 'Off20',
    //   percentage: '20%',
    //   description: 'THis is 20% off code',
    //   expiryDate: '2023-11-30',
    //   status: 'active',
    //   image: 'https://via.placeholder.com/150x100?text=Offer+Image'
    // },
    // {
    //   couponCode: 'Off10',
    //   percentage: '10%',
    //   description: 'This is 10% off code',
    //   expiryDate: '2023-11-30',
    //   status: 'active',
    //   image: 'https://via.placeholder.com/150x100?text=Offer+Image'
    // }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...form, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOffers([...offers, form]);
    setForm({
      couponCode: '',
      percentage: '',
      description: '',
      expiryDate: '',
      status: 'active',
      image: ''
    });
    setImageFile(null);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Offers & Coupons
      </Typography>

      <Grid container spacing={3}>
        {/* Add New Offer */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Add New Offer</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Enter Coupon Code" 
                name="couponCode"
                value={form.couponCode}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Enter Percentage"
                name="percentage"
                value={form.percentage}
                onChange={handleChange}
                type="number"
                margin="normal"
                InputProps={{
                  endAdornment: <span>%</span>,
                }}
              />
              <TextField
                fullWidth
                label="Enter Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                type="date"
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={form.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ mt: 2 }}
              >
                Upload Offer Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Offer List */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>List of Offers</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Coupon Code</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {offer.image ? (
                          <img src={offer.image} alt="Offer" width="100" />
                        ) : (
                          <Typography color="textSecondary">Image Not Available</Typography>
                        )}
                        <Typography variant="caption" color="error">
                          Expiry: {new Date(offer.expiryDate).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell>{offer.couponCode}</TableCell>
                      <TableCell>{offer.percentage}</TableCell>
                      <TableCell>{offer.description}</TableCell>
                      <TableCell>{offer.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OffersPage;
