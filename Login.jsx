import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // In a real app, you'd validate the credentials here
    login({ name: 'Test User', email });
    navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6 }}>
      <Paper elevation={8} sx={{ p: 6, maxWidth: 400, width: '100%', borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={800} color="text.primary" align="center" gutterBottom>
          Welcome Back!
        </Typography>
        {error && <Typography color="error" align="center" fontWeight={600}>{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
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
          <Button type="submit" variant="contained" size="large" fullWidth>
            Sign In
          </Button>
        </Box>
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Button component={Link} to="/register" color="primary" size="small">
            Sign up
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
