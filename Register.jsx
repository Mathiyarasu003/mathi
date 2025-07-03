import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    login({ name, email });
    navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6 }}>
      <Paper elevation={8} sx={{ p: 6, maxWidth: 400, width: '100%', borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={800} color="text.primary" align="center" gutterBottom>
          Create Your Account
        </Typography>
        {error && <Typography color="error" align="center" fontWeight={600}>{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="success" size="large" fullWidth>
            Create Account
          </Button>
        </Box>
        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Button component={Link} to="/login" color="primary" size="small">
            Sign in
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
