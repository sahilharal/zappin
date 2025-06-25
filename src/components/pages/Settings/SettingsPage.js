import React, { useState } from 'react';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    firmName: '',
    firmMobile: '',
    firmEmail: '',
    firmAddress: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>Settings</h2>
        {success && <div style={styles.success}>✅ Successfully Submitted!</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="firmName" style={styles.label}>Firm Name</label>
            <input
              type="text"
              id="firmName"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="firmMobile" style={styles.label}>Firm Mobile No</label>
            <input
              type="tel"
              id="firmMobile"
              name="firmMobile"
              value={formData.firmMobile}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="firmEmail" style={styles.label}>Firm Email</label>
            <input
              type="email"
              id="firmEmail"
              name="firmEmail"
              value={formData.firmEmail}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="firmAddress" style={styles.label}>Firm Address</label>
            <input
              type="text"
              id="firmAddress"
              name="firmAddress"
              value={formData.firmAddress}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            <span style={{ marginRight: '8px' }}>✔</span> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '50px',
    minHeight: '100vh',
  },
  container: {
    background: 'white',
    padding: '30px',
    borderRadius: '8px',
    width: '500px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '26px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  input: {
    width: '97%',
    padding: '8px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    fontSize: '15px',
    outline: 'none',
  },
  success: {
    color: 'green',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  submitBtn: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
};

export default SettingsForm;
