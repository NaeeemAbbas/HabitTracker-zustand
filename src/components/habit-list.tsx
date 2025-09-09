import { Box, Grid, Paper } from "@mui/material";
import useHabitStore from "../store/store";


const HabitList = () => {
    const {habits} = useHabitStore(); 
  return <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt: 2}}>
    {
    habits.map((habit) =>(
        <Paper key={habit.id}  elevation={2} sx={{p:2}}>
          <Grid container  alignItems="center">


          </Grid>
        </Paper>
    ))
    }
  </Box>;
}
export default HabitList;