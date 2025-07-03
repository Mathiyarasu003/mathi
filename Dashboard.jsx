import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FaPlus, FaCheck, FaTrash } from 'react-icons/fa';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import ConfirmModal from '../components/ConfirmModal';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Explore the new dashboard design', completed: false },
      { id: 2, text: 'Add a new feature', completed: false },
    ];
  });
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
      setSnackbar({ open: true, message: 'Task added!', severity: 'success' });
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setSnackbar({ open: true, message: 'Task deleted!', severity: 'info' });
  };

  const openConfirmModal = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const closeConfirmModal = () => {
    setTaskToDelete(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      removeTask(taskToDelete);
      closeConfirmModal();
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)', py: 6 }}>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeConfirmModal}
        onConfirm={handleConfirmDelete}
        title="Delete Task"
        message="Are you sure you want to delete this task?"
      />
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={800} color="text.primary" gutterBottom>
          Welcome, {user?.name}!
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Here's your task list for today.
        </Typography>
        <Card elevation={8} sx={{ borderRadius: 4 }}>
          <CardContent>
            <Box component="form" onSubmit={handleAddTask} sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                fullWidth
                variant="outlined"
                label="What's next on your list?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FaPlus />}
              >
                Add Task
              </Button>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')}>All</Button>
              <Button variant={filter === 'completed' ? 'contained' : 'outlined'} color="success" onClick={() => setFilter('completed')}>Completed</Button>
              <Button variant={filter === 'incomplete' ? 'contained' : 'outlined'} color="warning" onClick={() => setFilter('incomplete')}>Incomplete</Button>
            </Stack>
            <List>
              {filteredTasks.map((task) => (
                <ListItem
                  key={task.id}
                  sx={{
                    bgcolor: task.completed ? 'success.lighter' : 'grey.100',
                    borderRadius: 2,
                    mb: 1,
                    boxShadow: 1,
                    transition: 'background 0.3s',
                  }}
                  secondaryAction={
                    <>
                      <IconButton edge="end" color={task.completed ? 'success' : 'default'} onClick={() => toggleTaskCompletion(task.id)}>
                        <FaCheck />
                      </IconButton>
                      <IconButton edge="end" color="error" onClick={() => openConfirmModal(task.id)}>
                        <FaTrash />
                      </IconButton>
                    </>
                  }
                >
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    color="success"
                  />
                  <ListItemText
                    primary={task.text}
                    sx={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? 'text.disabled' : 'text.primary',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
