import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #ffe3e3 0%, #fffbe7 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 4 }}>
      <Typography variant="h1" fontWeight={900} color="error" sx={{ fontSize: { xs: 80, md: 140 }, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h3" fontWeight={700} color="text.primary" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" size="large">
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
