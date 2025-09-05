import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/add-habit-form"
import HabitList from "./components/habit-list";
// import useHabitStore from './store/store'

function App() {
  // const store = useHabitStore();
  // console.log(store);
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2" align="center" gutterBottom component="h1">
            Habit Tracker
          </Typography>
        </Box>
      </Container>
      {/* form */}
      <AddHabitForm />
    {/* list  */}
    <HabitList/>
    </>
  );
}

export default App;
