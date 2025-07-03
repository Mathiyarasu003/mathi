import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #f3f3f3 0%, #e3f0ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" fontWeight={700} color="text.primary">
          Please log in to view your profile.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)', py: 6 }}>
      <Paper elevation={8} sx={{ maxWidth: 500, mx: 'auto', p: 6, borderRadius: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src={`https://i.pravatar.cc/150?u=${user.email}`}
            alt="User avatar"
            sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: '4px solid', borderColor: 'primary.main' }}
          />
          <Typography variant="h4" fontWeight={800} color="text.primary" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
