import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { DatePicker } from '@shopify/polaris';
import '../styles/DateTimeSelector.css';

export const BookingTime = () => {
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="datetime-container">
        <h3 class="calendar-title">
          Your Appointment Date and Time
        </h3>
      <div className="calendar-section">

        <DatePicker
          month={month}
          year={year}
          selected={selectedDates}
          onChange={setSelectedDates}
          onMonthChange={(newMonth, newYear) => {
            setMonth(newMonth);
            setYear(newYear);
          }}
        />

      <Paper elevation={3} className="timeslot-section">
        <Typography variant="h6" gutterBottom>
          Select Time Slot  
        </Typography>
        <RadioGroup
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {timeSlots.map((slot, index) => (
            <FormControlLabel
              key={index}
              value={slot}
              control={<Radio sx={{ color: '#5f2eea', '&.Mui-checked': { color: '#5f2eea' } }} />}
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  {slot}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Paper>
      </div>
    </div>
  );
};
