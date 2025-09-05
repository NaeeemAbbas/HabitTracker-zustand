import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import useHabitStore from "../store/store";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"Daily" | "Weekly">("Daily");

  const { habits, addHabit } = useHabitStore();
  console.log(habits);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="frequency-label">Frequency</InputLabel>
          <Select
            labelId="frequency-label"
            value={frequency}
            label="Frequency"
            onChange={(e) => setFrequency(e.target.value as "Daily" | "Weekly")}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" color="primary" variant="contained">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
