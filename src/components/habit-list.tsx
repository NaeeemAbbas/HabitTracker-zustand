import { Box, Paper } from "@mui/material";
import useHabitStore from "../store/store";


const HabitList = () => {
    const {habits} = useHabitStore(); 
  return <Box>
    {
    habits.map((habit) =>(
        <Paper>

            hello world
        </Paper>
    ))
    }
  </Box>;
}
export default HabitList;