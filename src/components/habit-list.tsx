import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import useHabitStore from "../store/store";
import  CheckCircleIcon  from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
const HabitList = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();

    const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Frequency: {habit.frequency}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button variant="outlined"
                onClick={() => toggleHabit(habit.id, today)} 
                color={
                  habit.completedDates.includes(today) ? "success" : "primary"
                }
                startIcon={<CheckCircleIcon/>}
                >

                  {
                    habit.completedDates.includes(today) ? "Completed Today" : "Mark as Completed"
                  }
                </Button>
                <Button color="error" variant="outlined" startIcon={<DeleteIcon/>}
                onClick={() => removeHabit(habit.id)}
                >Remove</Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
