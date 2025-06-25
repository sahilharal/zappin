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
  const [offers, setOffers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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
    const newOffers = [...offers];

    if (editIndex !== null) {
      newOffers[editIndex] = form;
      setOffers(newOffers);
      setEditIndex(null);
    } else {
      setOffers([...offers, form]);
    }

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

  const handleEdit = (index) => {
    setForm(offers[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newOffers = offers.filter((_, i) => i !== index);
    setOffers(newOffers);
  };

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 } }}>
      <Typography variant="h5" gutterBottom textAlign="center">
        Offers & Coupons
      </Typography>

      <Grid container spacing={3}>
        {/* Form Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" gutterBottom>{editIndex !== null ? 'Edit Offer' : 'Add New Offer'}</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Enter Coupon Code"
                name="couponCode"
                value={form.couponCode}
                onChange={handleChange}
                margin="dense"
              />
              <TextField
                fullWidth
                label="Enter Percentage"
                name="percentage"
                value={form.percentage}
                onChange={handleChange}
                type="number"
                margin="dense"
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
                margin="dense"
              />
              <TextField
                fullWidth
                type="date"
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
              <FormControl fullWidth margin="dense">
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
                sx={{ mt: 1 }}
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
                {editIndex !== null ? 'Update Offer' : 'Submit'}
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Offers Table */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" gutterBottom>List of Offers</Typography>
            <TableContainer sx={{ maxHeight: 400, overflowX: 'auto' }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Coupon Code</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {offer.image ? (
                          <img src={offer.image} alt="Offer" width="80" />
                        ) : (
                          <Typography color="textSecondary" fontSize="small">No Image</Typography>
                        )}
                        <Typography variant="caption" display="block" color="error">
                          {new Date(offer.expiryDate).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell>{offer.couponCode}</TableCell>
                      <TableCell>{offer.percentage}%</TableCell>
                      <TableCell>{offer.description}</TableCell>
                      <TableCell>{offer.status}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleEdit(index)}
                          sx={{ mb: 0.5 }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {offers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        No offers available.
                      </TableCell>
                    </TableRow>
                  )}
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
