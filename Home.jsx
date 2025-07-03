import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 6 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" fontWeight={800} color="text.primary" gutterBottom>
          Organize Your Life with TaskManager
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          A simple, yet powerful tool to keep track of your tasks and boost your productivity.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          <Button component={Link} to="/login" variant="contained" size="large">
            Get Started
          </Button>
          <Button component={Link} to="/register" variant="outlined" size="large">
            Learn More
          </Button>
        </Box>
      </Container>
      <Grid container spacing={4} maxWidth="lg" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>Login</Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>Access your account and manage your tasks.</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button component={Link} to="/login" color="primary">Go to Login →</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>Register</Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>Create a new account to start organizing your life.</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button component={Link} to="/register" color="primary">Go to Register →</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={6} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>Dashboard</Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>View and manage all your tasks in one place.</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button component={Link} to="/dashboard" color="primary">Go to Dashboard →</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
