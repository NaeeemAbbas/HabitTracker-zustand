import { Box, Paper } from "@mui/material";
import useHabitStore from "../store/store";


const HabitList = () => {
    const {habits} = useHabitStore(); 
  return <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt: 2}}>
    {
    habits.map((habit) =>(
        <Paper key={habit.id}  elevation={2}>
          Hello this is chcek 11
           
        </Paper>
    ))
    }
  </Box>;
}
export default HabitList;