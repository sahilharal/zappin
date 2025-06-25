import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './components/pages/Dashboard/DashboardPage';
import CategoriesPage from './components/pages/Categories/CategoriesPage';
import SubCategoriesPage from './components/pages/SubCategories/SubCategoriesPage';
import ProductsPage from './components/pages/Products/ProductsPage';
import OutletsPage from './components/pages/Outlets/OutletsPage';
import OffersPage from './components/pages/Offers/OffersPage';
import OrdersPage from './components/pages/Orders/OrdersPage';
import UsersPage from './components/pages/Users/UsersPage';
import SectionsPage from './components/pages/Sections/SectionsPage';
import ContentsPage from './components/pages/Contents/ContentsPage';
import ExpensesPage from './components/pages/Expenses/ExpensesPage';
import SettingsPage from './components/pages/Settings/SettingsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B00',
    },
    secondary: {
      main: '#17B2BA',
    },
  },
});

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar collapsed={sidebarCollapsed} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/subcategories" element={<SubCategoriesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/outlets" element={<OutletsPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/sections" element={<SectionsPage />} />
              <Route path="/contents" element={<ContentsPage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App; 